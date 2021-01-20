import { Fanatics } from "./pageObjects/fanatics";
import { WebDriver, By, until, Builder, Capabilities, WebElement } from 'selenium-webdriver'

const go = new Fanatics();

describe("delete cart", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });

  test("Are you able to delete an item from the cart", async () => {
    const search = "nets hat";
    const generatedomainURL = 'https://www.fanatics.com/cart';
    await go.searchitem();
    await go.inputsearch(search);
    await go.searchbut();
    await go.netshat();
    await go.addcart();
    await go.deletecart();
    await go.driver.sleep(1000);
    let myElement = await (await go.driver).findElement(By.css('[class="empty-cart-message m-b-md"]'));
    let emptyText = await myElement.getText();
    
    expect(emptyText).toBe('Your Shopping Cart Is Empty');
    console.log(" ", emptyText);
  });
})