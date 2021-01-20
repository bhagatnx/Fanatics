import { Fanatics } from "./pageObjects/fanatics";

const go = new Fanatics();

// Login test couldn't fully be automated due to security feature in login method.
// A manual test will be conducted to confirm the login and logout functions are working as it should.

describe("login", () => {

    beforeEach(async () => {
        await go.navigate();
    });
    afterAll(async () => {
        await go.quit();
    });

        it("can we login", async () => {
            // const signURL = "https://www.fanatics.com/login?nextPathname=/account"
            // const email = "P1Group2@gmail.com";
            // const password = "QAP1Group2!";
            // await go.openaccount();
            // await go.inputemail(email);
            // await go.inputpassword(password);
            // //await go.clickreCaptcha();
            // await go.clicklogin();
        });
    });

