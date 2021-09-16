const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class SettingsPage extends Page {
    /**
     * define selectors using getter methods
     */
   
    get stripeCardNumberInput () { 
        let outerDiv = $('#stripeCheckout')
        return outerDiv.$('.InputElement') 
    } // $('[name="cardnumber"]')
    get stripeCardExpiryInput () { return  } // $('[name="cardExpiry"]')
    get stripeCardCVCInput () { return  } // $('[name="cvc"]')
    get subscribeButton () { return $('#subscribeButton') }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    async waitForStripeCheckout () {
        $('#stripeCheckout').waitForClickable({ timeout:5000 })
        // $('#stripeCheckout').waitForExist({ timeout:5000 })
    }

    async enterCardDetailsAndSubmit (cardNumber, cardExpiry, cvc) {
        await this.stripeCardNumberInput.setValue(cardNumber);
        await this.stripeCardExpiryInput.setValue(cardExpiry);
        await this.stripeCardCVCInput.setValue(cvc);
        await this.subscribeButton.click();
    }

    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('/');
    }
}

module.exports = new SettingsPage();
