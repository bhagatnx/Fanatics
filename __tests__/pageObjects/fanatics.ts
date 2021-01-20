import { WebDriver, By, until, Builder, Capabilities, WebElement } from 'selenium-webdriver'
import { elementLocated } from "selenium-webdriver/lib/until";
const chromedriver = require("chromedriver");
const fs = require("fs");

export class Fanatics {
  driver: WebDriver;
  homepage: string = "https://www.fanatics.com/";
  logo: By = By.css('[aria-label="Fanatics Logo return to fanatics ecomm site"]');
  help: By = By.css('[data-trk-id="top-bar-link-help"]');
  search: By = By.css('#typeahead-input-desktop');
  searchbutton: By = By.className("typeahead-go");
  netsHat: By = By.css('[alt="Brooklyn Nets New Era 2020/21 City Edition Alternate 9FIFTY Snapback Adjustable Hat - Black"]');
  giantsHat: By = By.css('[alt="New York Giants New Era 2020 NFL Sideline Official Sport Pom Cuffed Knit Hat - Royal/Gray"]');

  cartadd: By = By.xpath('//span[text()="Add to Cart"]');
  cartdelete: By = By.css('[data-talos="buttonRemoveItem"]');
  checkoutbutton: By = By.css('[class="button large checkout-button primary"]');
  selectquantity: By = By.css('.drop-down-selected');
  quantity: By = By.xpath('//div[text()="2"]');
  cartcount: By = By.xpath('(//span[@class="cart-count"])[1]');

  nfltab: By = By.css('[aria-label="nfl"]');
  NYG: By = By.css('[alt="Shop New York Giants"]');

  account: By = By.xpath('//a[text()= "My Account"]');
  reCaptcha: By = By.css('[class="rc-anchor-center-item rc-anchor-checkbox-holder"]');
  email: By = By.css('[id="emailInput"]');
  password: By = By.css('[id="passwordInput"]');
  loginbutton: By = By.css('[data-talos="buttonLogin"]');
  signout: By = By.css('[class="sign-out-link color-link-blue body-1 float-right link"]');

  firstname: By = By.css('[name="firstName"]');
  lastname: By = By.css('[name="lastName"]');
  email2: By = By.css('[type="email"]');
  phone: By = By.css('[type="tel"]');
  address: By = By.css('[aria-label="Address 1"]');
  contcheck: By = By.css('[type="submit"]');
  emptycart: By = By.css('[class="empty-cart-message m-b-md"]');

  constructor(driver?: WebDriver) {
    if (driver) this.driver = driver;
    else
      this.driver = new Builder().withCapabilities(Capabilities.chrome()).build()

  }

  async navigate(url?: string): Promise<void> {
    if (url) this.driver.get(url)
    else return this.driver.get(this.homepage);
  }

  async quit(): Promise<void> {
    return this.driver.quit();
  }

  async getElement(elementBy: By): Promise<WebElement> {
    await this.driver.wait(until.elementLocated(elementBy));
    let element = await this.driver.findElement(elementBy);
    await this.driver.wait(until.elementIsVisible(element));
    return element;
  }

  async click(elementBy: By): Promise<void> {
    let element = await this.driver.wait(until.elementLocated(elementBy));
    return await element.click();
  }

  // Logo
  async clicklogo(): Promise<void> {
    await this.navigate('https://fanatics.custhelp.com/')
    return await this.click(this.logo)
  }

  // NFL tab
  async tabs(): Promise<void> {
    await this.driver.sleep(5500)
    await this.click(this.nfltab)
    await this.getElement(this.NYG);
    await this.driver.wait(
      this.click(this.NYG));
  }
  // From Lines 84 - 115, it was for login test
  // async openaccount(): Promise<void> {
  //   await this.driver.sleep(4000)
  //   await this.click(this.account)
  // };

  // async setInput(elementBy: By, keys: any): Promise<void> {
  //   let input = await this.getElement(elementBy);
  //   await this.driver.wait(until.elementIsEnabled(input));
  //   await input.clear();
  //   return input.sendKeys(keys);
  // };

  // async inputemail(email: string): Promise<void> {
  //   let input = await this.getElement(this.email);
  //   await this.driver.wait(until.elementIsEnabled(input));
  //   return input.sendKeys(email);
  // };

  // async inputpassword(password: string): Promise<void> {
  //   let input = await this.getElement(this.password);
  //   await this.driver.wait(until.elementIsEnabled(input));
  //   return input.sendKeys(password);
  // };

  // // async clickreCaptcha(): Promise<void> {
  // //   return await this.click(this.reCaptcha);
  // // };

  // async clicklogin(): Promise<void> {
  //   await this.driver.sleep(15000)
  //   return await this.click(this.loginbutton);
  //};

  // Search bar
  async searchitem(): Promise<void> {
    await this.driver.sleep(5000)
    await this.click(this.search)
  };

  // Methods for inputs
  async setInputs(elementBy: By, keys: any): Promise<void> {
    let input = await this.getElement(elementBy);
    await this.driver.wait(until.elementIsEnabled(input));
    await input.clear();
    return input.sendKeys(keys);
  };

  // Input search field
  async inputsearch(search: string): Promise<void> {
    let input = await this.getElement(this.search);
    await this.driver.wait(until.elementIsEnabled(input));
    return input.sendKeys(search);
  };

  // Search button
  async searchbut(): Promise<void> {
    await this.click(this.searchbutton)
  };

  // Nets Hat 
  async netshat(): Promise<void> {
    await this.click(this.netsHat)
  };

  // Dropdown feature to select quantity
  async dropdown(): Promise<void> {
    await this.click(this.selectquantity)
  };

  // Quantity of item
  async amount(): Promise<void> {
    await this.click(this.quantity)
  };

  // Add to cart
  async addcart(): Promise<void> {
    await this.click(this.cartadd)
  };

  // Checkout button
  async checkout(): Promise<void> {
    await this.click(this.checkoutbutton)
  };

  // Delete cart 
  async deletecart(): Promise<void> {
    await this.click(this.cartdelete)
    await this.driver.sleep(500)
  };

  // First name for checkout
  async inputfirname(firstname: string): Promise<void> {
    let input = await this.getElement(this.firstname);
    await this.driver.wait(until.elementIsEnabled(input));
    return input.sendKeys(firstname);
  };

  // Last name for checkout
  async inputlasname(lastname: string): Promise<void> {
    let input = await this.getElement(this.lastname);
    await this.driver.wait(until.elementIsEnabled(input));
    return input.sendKeys(lastname);
  };

  // Email address for checkout
  async inputemail2(email2: string): Promise<void> {
    let input = await this.getElement(this.email2);
    await this.driver.wait(until.elementIsEnabled(input));
    return input.sendKeys(email2);
  };

  // Address for checkout. However, this method will not be used due to prepopulated feature.
  async inputaddress(address: string): Promise<void> {
    let input = await this.getElement(this.address);
    await this.driver.wait(until.elementIsEnabled(input));
    return input.sendKeys(address);
  };

  // Phone number for checkout
  async inputphone(phone: number): Promise<void> {
    let input = await this.getElement(this.phone);
    await this.driver.wait(until.elementIsEnabled(input));
    return input.sendKeys(phone);
  };

  // Final checkout button 
  async conticheck(): Promise<void> {
    await this.click(this.contcheck)
  };

  async newtab(): Promise<void> {
    //await this.driver.sleep(5500)
    await this.click(this.nfltab)
    await this.getElement(this.NYG);
    await this.driver.wait(
      this.click(this.NYG));
  };

  // Giants Winter Hat
  async giants(): Promise<void> {
    await this.click(this.giantsHat)
  };

  // Screenshot
  async takeScreenshot(filepath: string) {
    fs.writeFile(
      `${__dirname}/screenshot/search.png`,
      await this.driver.takeScreenshot(),
      "base64",
      (e) => {
        if (e) console.log(e);
        else console.log("screenshot saved successfully");
      }
    );
  };

  // Will tell you cart count 
  async checkoutcart() {
    let result: String;
    await this.driver.wait(until.elementLocated(this.cartcount));
    result = await (await this.driver.findElement(this.cartcount)).getText();
    return result;
  };

};

