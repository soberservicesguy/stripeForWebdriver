const SettingsPage = require('../pageobjects/settings.page');


const attemptPayment = () => {
    return describe('Signup and Get Subscription', () => {
        before(async function() {
            await SettingsPage.open();
        });

        it('should get stripe monthly subscription', async () => {

            await SettingsPage.waitForStripeCheckout();
            await SettingsPage.enterCardDetailsAndSubmit('4242424242424242', '01 30', '456')

        });

        after(async function() {
            await browser.pause(2000); 
        });

    });
}



attemptPayment()