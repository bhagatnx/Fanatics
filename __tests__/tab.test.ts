import { Fanatics } from "./pageObjects/fanatics";

const go = new Fanatics();

describe("tabs", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });

  test("Be able to navigate to NYG page", async () => {
    const generatedomainURL = 'https://www.fanatics.com/nfl/new-york-giants/o-3572+t-79497891+z-97129-403843569';
    const namePage = "New York Giants Apparel, Giants Gear, New York Giants Shop, Store | Fanatics";
    await go.tabs();
    const url = await go.driver.getCurrentUrl();
    const name = await go.driver.getTitle();

    expect(url).toContain(generatedomainURL);
    expect(name).toContain(namePage);
    console.log("url", url);
    console.log("name", name);
  });
})