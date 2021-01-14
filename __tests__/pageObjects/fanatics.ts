import { WebDriver, By, until, Builder, Capabilities, WebElement } from 'selenium-webdriver'
import { elementLocated } from "selenium-webdriver/lib/until";
const chromedriver = require("chromedriver");

export class fanatics {
    driver: WebDriver;
    homepage: string = "https://www.fanatics.com/";
    //logoicon: By = By.css('[class="logo no-fancash-logo"]');
    logo: By = By.css('[aria-label="Fanatics Logo return to fanatics ecomm site"]');
    help: By = By.css('[data-trk-id="top-bar-link-help"]');
    search: By = By.css('#typeahead-input-desktop');
    searchbutton: By = By.className("typeahead-go");
    netsHat: By = By.xpath('(//a[@data-trk-id="p-3999058"])[1]');
    //Title for hat: Brooklyn Nets New Era 2020/21 City Edition Alternate 
    //9FIFTY Snapback Adjustable Hat - Black;
    cartadd: By = By.xpath('//span[text()="Add to Cart"]');
    cartdelete: By = By.css('[data-talos="buttonRemoveItem"]');
    checkoutbutton: By = By.css('[class="button large checkout-button primary"]');
    paypal: By = By.css('[class="paypal-button-text"]');
    selectquantity: By = By.css('.drop-down-selected');
    quantity: By = By.xpath('//div[text()="3"]');
    nfltab: By = By.css('[id="1"]');
    NYG: By = By.css('[data-trk-id="topnav-t-2512"]');
    account: By = By.xpath('//a[text()= "My Account"]');
    reCaptcha: By = By.css('[class="recaptcha-checkbox-border"]');
    email: By = By.css('[id="emailInput"]');
    password: By = By.css('[id="passwordInput"]');
    loginbutton: By = By.css('[data-talos="buttonLogin"]');
    signout: By = By.css('[class="sign-out-link color-link-blue body-1 float-right link"]');
}
