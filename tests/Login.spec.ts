import { test, type expect, type Page } from "@playwright/test";
import LoginPage from "../src/page/LoginPage.ts";
import BlockStreamPage from "../src/page/BlockStreamPage.ts";
import CommonPage from "../src/page/CommonPage.ts";

test.describe("Verify Login", () => {
  test("Login and verify homepage", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const commonPage = new CommonPage(page);


    await loginPage.navigateToHomePage();
    await loginPage.login()
  });
});
