import { test, type expect, type Page } from "@playwright/test";
import LoginPage from "../page/LoginPage.js";
import BlockStreamPage from "../page/BlockStreamPage.js";
import CommonPage from "../page/CommonPage.js";

test.describe("Verify Login", () => {
  test("Login and verify homepage", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const commonPage = new CommonPage(page);


    await loginPage.navigateToHomePage();
    await loginPage.login()
  });
});
