import { test, expect } from '@playwright/test';
import { chromium } from 'playwright';

let browser;
let context;
let page;


test.describe('Describe block for hooks', () => {
    test.beforeAll(async () => {
        //launch chrome browser before all tests
        browser = await chromium.launch({ headless: false })
        console.log('Before all Hook: browser launched');
    });

    test.beforeEach(async () => {
        //create context for a browser
        context = await browser.newContext()
        //create a new page
        page = await context.newPage()

        //navigate to test url
        await page.goto('https://the-internet.herokuapp.com/');
        // pause execution
        console.log('Before each: new page created');
        await page.pause()
    });

    test.afterEach(async () => {
        //close page and context
        await page.close()
        await context.close()
        console.log('After each: page closed');
    });

    test.afterAll(async () => {
        //close browser
        await browser.close()
        console.log('After all: browser closed');
    });

    test('A/B test', async () => {
        await page.click('text="A/B Testing"')
        const header = await page.textContent("h3")

        const expectedPattern = /^A\/B Test (Control|Variation [0-9])$/;
        expect(header).toMatch(expectedPattern)
        // const expectedHeaders = ['A/B Test Control', 'A/B Test Variation 1', 'A/B Test Variation A'];
        // expect(expectedHeaders).toContain(header)
    });

    test('Chechbox verification', async () => {
        await page.click('text="Checkboxes"')
        const checkbox = await page.isChecked('input[type="checkbox"]:first-child')
        expect(checkbox).toBe(false)
    });

    test('Geolocation setting in context and verification', async () => {
        context = await browser.newContext({
            permissions: ['geolocation'],
            geolocation: {
                longitude: -0.127758,
                latitude: 51.507351
            },
            viewport: {
                width: 1920,
                height: 1080
            }
        })
        page = await context.newPage()
        console.log("USING CONTEXT AND PAGE CREATE WITHIN TEST AND NOT WITHIN HOOKS");

        await page.pause()
        await page.goto('https://the-internet.herokuapp.com/geolocation')
        await page.click('button')
        const lat = await page.textContent("#lat-value")
        const long = await page.textContent("#long-value")
        expect(parseFloat(lat)).toBeCloseTo(51.507351)
        expect(parseFloat(long)).toBeCloseTo(-0.127758)
    });
});

