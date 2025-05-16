import { Page } from "@playwright/test";


export default class CommonPage {
  constructor(private page: Page) {}

  async fillForm(attribute: any, type: any, mandatory: any, data: any) {
    var retry = 0;
    var success = false;
    if (type.length != 0) {
      for (var i = 0; i < type.length; i++) {
        if (data[i] !== null && data[i] !== undefined) {
          switch (type) {
            case "input":
              retry = 0;
              success = false;
              while (success == false && retry < 3) {
                //   await this.page.get
                retry++;
              }
              break;
            default:
              break;
          }
        }
      }
    }
  }

  async hardWait(milliSeconds: any) {
    await this.page.waitForTimeout(milliSeconds);
  }

  async waitForURL(URL: any) {
    await this.page.waitForURL(URL);
  }
}