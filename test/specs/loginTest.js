// const {assert} = require('chai');
// const dotenv = require('dotenv');
import { expect, browser, $ } from '@wdio/globals'

// await dotenv.config();

describe('Wp Pool Login', () => {
    // it('Validate of admin login', async () => {
    //     await browser.maximizeWindow()
    //     await browser.url('https://dev-wppoolstesting.pantheonsite.io/wp-admin')
    //     await browser.pause(3000)
    //     await $('#user_login').setValue('admin@wppool.com')
    //     await browser.pause(3000)
    //     await $('#user_pass').setValue('Admin@321#')
    //     await browser.pause(3000)
    //     await $('#wp-submit').click()
    //     await browser.pause(3000)

    //     // await expect($('#flash')).toBeExisting()
    //     // await expect($('#flash')).toHaveTextContaining(
    //     //     'You logged into a secure area!')
    // });
    // it('should demonstrate the getCSSProperty command', async () => {
    //     const elem = await $('#wpcontent')
    //     const color = await elem.getCSSProperty('color')
    //     console.log('color is: ', color.parsed.hex)
    // });
    // it('Switch Settings - Select Custom Switch size & Scale it to 220', async() => {
    //     const floatingElem1 = await $('div.gap-8 div.flex > div:nth-of-type(1) > div.gap-1')
    //     await floatingElem1.scrollIntoView()
    //     await browser.pause(3000)
    //     const customFlSwElem = await $('div:nth-of-type(6) > span')
    //     await customFlSwElem.click()
    //     const saveBtn2 = await $('button.bg-blue-500');
    //     const scaleValue1 = await $('div.min-w-56 > input')
    //     await scaleValue1.dragAndDrop({x: 46, y: 0})
    //     console.log('Scale Value is: ', scaleValue1)
    //     await saveBtn2.click()
    //     console.log('Custom Switch is Selected & Scale value is set to 220')
    //     await browser.pause(3000)
    // });
    // it('Validate whether the Darkmode is working or not from the Frontend', async() => {
    //     await browser.maximizeWindow()
    //     await browser.url('https://dev-wppoolstesting.pantheonsite.io')
    //     // const WPPOOLWebsite = await $('#wp-admin-bar-site-name > a')
    //     // await WPPOOLWebsite.click()
    //     await browser.pause(3000)
    //     const WPDMSwitchElem = await $('div.wp-dark-mode-floating-switch')
    //     const WPDMSwitchPosition1 = await WPDMSwitchElem.getCSSProperty('left')
    //     const WPDMSwitchPosition2 = await WPDMSwitchElem.getCSSProperty('bottom')
    //     await expect(WPDMSwitchPosition1).toEqual('10px')
    //     await expect(WPDMSwitchPosition2).toEqual('10px')
    //     // console.log('WPDMSwitchPosition => ', WPDMSwitchPosition1)
    //     // console.log('WPDMSwitchPosition => ', WPDMSwitchPosition2)
    //     console.log('Dark Mode Floating Switch Left Position is Validated')


    // });
    it('Validate whether the Darkmode is working or not on the Admin Dashboard2', async() => {
        await browser.maximizeWindow()
        await browser.url('https://dev-wppoolstesting.pantheonsite.io')
        await browser.pause(3000)
        const WPDMSwitchElem2 = await $('div.wp-dark-mode-floating-switch > div > div')
        const switchPositionScale = await WPDMSwitchElem2.getAttribute('style')
        if (switchPositionScale.includes('2.2')) {
            console.log('switchPositionScale => ', switchPositionScale)
            console.log('Dark Mode Floating Switch Scale Position is Validated')
        }else {
            console.log('Dark Mode Floating Switch Scale Position is not Validated')
        }
        // console.log('Dark Mode Floating Switch Scale Position is Validated')
        

        // await expect(SwitchElemPositionX).toEqual(expectedX)
        // await expect(SwitchElemPositionY).toEqual(expectedY)
        // console.log('Dark Mode Floating Switch Left Position is Validated')
        
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


         // const leftPosition = await $('div.gap-8 > div > div.flex > div:nth-of-type(2) div.bg-gray-100')
        //  const inactiveleftText = await $('div.gap-8 > div > div.flex > div:nth-of-type(2) div.bg-gray-100 > span')
        //  const inleftText = await inactiveleftText.getText()
        //  const activeLeftText = await $('div.gap-8 > div > div.flex > div:nth-of-type(2) div.bg-blue-600 > span')
        //  const acLeftText = await activeLeftText.getText()
        //  // const selLeftPosition = await leftPosition.getAttribute('class')
        //  const saveBtn3 = await $('button.bg-blue-500');
        //  if (selLeftPosition.includes('bg-gray-100') && leftPositionText.includes('Left')){
        //      await leftPosition.click()
        //      await saveBtn3.click()
        //      console.log('Floating Switch Position is selected Left Bottom')
        //      await browser.pause(3000)
        //  } else if (selLeftPosition.includes('shadow-md') && leftPositionText.includes('Left')){
        //      console.log('Floating Switch Position was remain selected Left Bottom')
        //      await leftPosition.click()
        //      await browser.pause(3000)
        //  } else {
        //      console.log('Floating Switch Position was selected Left Bottom')
        //      await browser.pause(3000)
 
        //  }

