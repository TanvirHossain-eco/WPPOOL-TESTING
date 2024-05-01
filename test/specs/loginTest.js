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
    it('Switch Settings - Select Custom Switch size & Scale it to 220', async() => {
        const floatingElem1 = await $('div.gap-8 div.flex > div:nth-of-type(1) > div.gap-1')
        await floatingElem1.scrollIntoView()
        await browser.pause(3000)
        const customFlSwElem = await $('div:nth-of-type(6) > span')
        await customFlSwElem.click()
        const saveBtn2 = await $('button.bg-blue-500');
        const scaleValue1 = await $('div.min-w-56 > input')
        await scaleValue1.dragAndDrop({x: 46, y: 0})
        console.log('Scale Value is: ', scaleValue1)
        await saveBtn2.click()
        console.log('Custom Switch is Selected & Scale value is set to 220')
        await browser.pause(3000)
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

