// const {assert} = require('chai');
// const dotenv = require('dotenv');
import { expect, browser, $ } from '@wdio/globals'

// await dotenv.config();

describe('Wp Pool Login', () => {
    it('Validate of admin login', async () => {
        await browser.maximizeWindow()
        await browser.url('https://dev-wppoolstesting.pantheonsite.io/wp-admin')
        await browser.pause(3000)
        await $('#user_login').setValue('admin@wppool.com')
        await browser.pause(3000)
        await $('#user_pass').setValue('Admin@321#')
        await browser.pause(3000)
        await $('#wp-submit').click()
        await browser.pause(3000)

        // await expect($('#flash')).toBeExisting()
        // await expect($('#flash')).toHaveTextContaining(
        //     'You logged into a secure area!')
    });
    it('should demonstrate the getCSSProperty command', async () => {
        const elem = await $('#wpcontent')
        const color = await elem.getCSSProperty('color')
        console.log('color is: ', color.parsed.hex)
    });
})
// console.log('selSwitchElem1 => ', selSwitchElem1);
// console.log("el 1 => ", selSwitchElem1);
        // console.log("el 2 => ", selSwitchElem2);
        // console.log("el 3 => ", selSwitchElem3);
        // //check if classlist contains '_selected'
        // console.log(selSwitchElem1.classList.contains('_selected'));
        // console.log(selSwitchElem2.classList.contains('_selected'));
        // console.log(selSwitchElem3.classList.contains('_selected'));

