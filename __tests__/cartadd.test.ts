import { Driver } from "selenium-webdriver/chrome";
import { Fanatics } from "./pageObjects/fanatics";

const go = new Fanatics();

describe("add cart", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });

  test("Can you add multiple items to the cart", async () => {
    const search = "nets hat";
    await go.searchitem();
    await go.inputsearch(search);
    await go.searchbut();
    await go.netshat();
    await go.dropdown();
    await go.amount();
    await go.addcart();
    await go.newtab();
    await go.giants();
    await go.driver.sleep(500);
    await go.addcart();
    await go.driver.sleep(500);
    let results = await go.checkoutcart();

    expect(results).toBe("3");
    console.log("total: ", results);
  });
})