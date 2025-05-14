import { Page, expect } from "@playwright/test";

export default class LoginPage {
  readonly btnLogin;
  readonly loginSalesforce;
  readonly inputUname;

  constructor(private page: Page) {
    this.btnLogin = page
      .getByLabel("Site tools", { exact: true })
      .locator("span")
      .filter({ hasText: "Login" });

    this.loginSalesforce = page.getByRole("link", {
      name: "Salesforce",
      exact: true,
    });

    this.inputUname = page.getByRole("textbox", { name: "username" });
  }

  async navigateToHomePage() {
    const screenWidth = 1536; // Replace with actual screen width
    const screenHeight = 816; // Replace with actual screen height

    await this.page.setViewportSize({
      width: screenWidth,
      height: screenHeight,
    });

    await this.page.goto("");
  }

  async login() {
    await this.btnLogin.hover();
    await this.btnLogin.click();
    await this.loginSalesforce.click();
    await expect(await this.inputUname).toBeVisible();
  }
}
