import { test, expect } from '@playwright/test';

test('Learning selectors', async ({ page }) => {
    //Navigate to the page
    await page.goto('http://127.0.0.1:5500/clickMe.html');

    // 1 Selecting by ID
    await page.locator('#clickButton').click();

    // 2 Selecting by class
    await page.locator('.button-style').click();

    // 3 By Tag and Class
    await page.locator('button.button-style').click();

    // 4 By Attribute value
    await page.locator('[data-action="increment"]').click();
    // await page.locator('[id="clickButton"]').click();
    // await page.locator('[class="button-style"]').click();

    // 5 Partial text
    await page.locator('[role*="but"]').click();

    // 6 By text content
    await page.locator('text=Click Me').click();

    // 7 Combine selectors for precision, class and text - find exact text match
    await page.locator('.button-style:text("Click Me")').click();

    // 8 Find elements containing specific text - has-text
    await page.locator('button:has-text("Click M")').click();

    // 9 Attribute and text combination
    await page.locator('[data-action="increment"]:text("Click Me")').click();

    // 10 playwright locators - https://playwright.dev/docs/locators
    //get by text
    await page.getByText('Click Me').click()

    // 11 by role
    await page.getByRole('button', { name: /click me/i }).click();

    // Assert the counter
    await expect(page.locator('#counter')).toHaveText('11')

    await page.pause();
});
