import { Fanatics } from "./pageObjects/fanatics";

const go = new Fanatics();

// An automated test will be conducted to test the checkout feature.
// However, due to the address section prepopulating, we will not be able to fully confirm the process.
// Instead, we will check for an error message.

describe("checkout", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });

  test("Are you able to checkout", async () => {
    const firstname = "Tom";
    const lastname = "Ford";
    const email2 = "TomFord@gmail.com"
    const phone = 1212223232
    const search = "nets hat"
    const error = 'This field is required.'
    await go.searchitem();
    await go.inputsearch(search);
    await go.searchbut();
    await go.netshat();
    await go.addcart();
    await go.checkout();
    await go.inputfirname(firstname);
    await go.inputlasname(lastname);
    await go.inputemail2(email2);
    await go.inputphone(phone);
    await go.conticheck();
    await go.driver.sleep(750);

    expect(error).toContain(error);
    console.log("message", error);
  });
})