import { test, expect } from '@playwright/test'
import PomManager from '../pages/PomManager'

let pm;
test.describe('Login tests', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    });

    test('Login with valid credentials', async () => {
        await pm.loginPage.navigate()
        await pm.loginPage.login('tomsmith', 'SuperSecretPassword!')
        await pm.securePage.assertLoggedInMessage('You logged into a secure area!')

        // Directly assert value in test
        const message = await pm.securePage.getMessage()
        expect(message).toContain('You logged into a secure area!')
    });
    test('Login with invalid credentials', async () => {
        await pm.loginPage.navigate()
        await pm.loginPage.login('invalidUser', 'SuperSecretPassword!')
        await pm.loginPage.assertErrorMessage('Your username is invalid!')
    });


});

test.describe('Checkbox verification', () => {
    test.beforeEach(async ({ page }) => {
        pm = new PomManager(page)
    })
    test.afterEach(async ({ page }) => {
        await page.close()
    });
    test('Check and uncheck checkboxes', async () => {
        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checkCheckbox(1)
        await pm.checkboxesPage.assertCheckbox(1, true)

        await pm.checkboxesPage.navigate()
        await pm.checkboxesPage.checkCheckbox(2)
        await pm.checkboxesPage.assertCheckbox(2, false)
    });

})