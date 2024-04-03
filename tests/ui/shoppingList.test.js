const { test, expect } = require('@playwright/test');

test('Check shopping list page', async ({ page }) => {
    await page.goto('https://anevg-exam-prep.onrender.com/shopping-list');
    const list = await page.$('li');
    expect(list).toBeTruthy();
  });
  