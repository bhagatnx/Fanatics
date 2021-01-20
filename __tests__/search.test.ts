import { createPrinter } from "typescript";
import { Fanatics } from "./pageObjects/fanatics";

const go = new Fanatics();

describe("search item", () => {

  beforeEach(async () => {
    await go.navigate();
  });
  afterAll(async () => {
    await go.quit();
  });

  test("Be able to search for an item item", async () => {
    const search = "nets hat";
    const generatedomainURL = 'https://www.fanatics.com/?query=nets%20hat&_ref=p-HP:m-SEARCH';
    const namePage = 'Search Results - Fanatics.com';
    await go.searchitem();
    await go.inputsearch(search);
    await go.searchbut();
    await go.takeScreenshot("nets hats");
  });
})