const { test, expect } = require('@playwright/test');

test('Check add products page', async ({ page }) => {
    await page.goto('https://anevg-exam-prep.onrender.com/add-product');
    const form = await page.$('input');
    expect(form).toBeTruthy();
  });
  