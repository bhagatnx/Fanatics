import { Fanatics } from "./pageObjects/fanatics";

const go = new Fanatics();

describe("logo homepage", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });

  test("Be able to navigate to homepage after clicking logo", async () => {
    const generatedomainURL = 'https://www.fanatics.com/';
    const namePage = 'Fanatics';
    await go.clicklogo();
    await go.driver.sleep(750);
    const url = await go.driver.getCurrentUrl();
    const name = await go.driver.getTitle();

    expect(url).toEqual(generatedomainURL);
    expect(name).toContain(namePage);
   });
 })
