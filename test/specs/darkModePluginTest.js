// const {remote} = require('webdriverio');
// const {assert} = require('chai');
// const dotenv = require('dotenv');
// import { expect, browser, $ } from '@wdio/globals'
// import AllureReporter from "@wdio/allure-reporter";

describe('Dark Mode Plugin Testing', () => {
    it('Validate of admin login', async () => {
        await browser.maximizeWindow()
        await browser.url('https://dev-wppoolstesting.pantheonsite.io/wp-admin')
        await browser.pause(3000)
        await $('.pds-button').click()
        await browser.pause(3000)
        await $('#user_login').setValue('admin@wppool.com')
        await browser.pause(3000)
        await $('#user_pass').setValue('Admin@321#')
        await browser.pause(3000)
        await $('#wp-submit').click()
        await browser.pause(3000)
    });
    
    it('Check Whether or not WP Dark Mode Plugin is Installed & Activated', async() => {
        // await browser.maximizeWindow()
        // await browser.url('https://dev-wppoolstesting.pantheonsite.io/wp-admin/')
        
        await $('#menu-plugins').click()
        await browser.pause(3000)
        // const darkmodeExists = await browser.isExisting()
        await $("input[type='search']").setValue('wp dark mode')
        await browser.pause(3000)
        const searchResults = await $('#the-list td').getText()
        // const search2Results = await $('#activate-wp-dark-mode').getText()
        if (searchResults.includes('No plugins found for: wp dark mode.')){
            console.log('Plugin is not Installed Yet')
            await browser.pause(3000)
            await $('.page-title-action').click()
            
        } else {
            const search2Results = await $('#the-list td span a').getText()
            if (search2Results.includes('Activate')){
                const button1 = await $('#activate-wp-dark-mode')
                await button1.click()
                await browser.pause(3000)
                console.log ('Plugin is Installed & Activated')
                await browser.pause(3000)
                await $('#menu-plugins').click()
                await $('.page-title-action').click()
            }else {
                console.log ('Plugin was Installed & Activated')
                await browser.pause(3000)
                await $('#menu-plugins').click()
                await $('.page-title-action').click()
            }
            
        } 
                   
    });
    it('Find & Verify WP Dark Mode Plugin is Installed & Activated', async() => {
        await $("input[type='search']").setValue('wp dark mode')
        await browser.pause(3000)
        const searchResults2 = await $('div.plugin-card-wp-dark-mode div.desc a').getText()
        if (searchResults2.includes('WPPOOL')){
            const button2= await $('div.plugin-card-wp-dark-mode div.action-links li .button')
            const buttonText2 = await button2.getText()
            if (buttonText2.includes('Install Now')){
                await button2.click()
                console.log('Plugin is Installed')
                await browser.pause(3000)
                await button2.click()
                console.log('Plugin is Installed & Activated')
                await browser.pause(3000)
                
            } else if (buttonText2.includes('Activate')) {
                await button2.click()
                console.log('Plugin was Installed Before, Now It is Activated')
                await browser.pause(3000)
            } else {
                console.log ('Plugin was Installed & Activated')
                await browser.pause(3000)
                
            }
            
        }else{
            console.log ('Plugin is not Found')
            await browser.pause(3000)
        }        
           
    });
    
    it('Enable Backend Darkmode from Settings', async() => {
        
        await $('#toplevel_page_wp-dark-mode div.wp-menu-name').click()
        await browser.pause(6000)
        const darkMode = await $('#wp-admin-bar-wp-dark-mode-admin-bar-switch span:nth-of-type(2)')
        await darkMode.click()
        console.log ('Dark Mode Backend is Enabled Successfully')
        await browser.pause(3000)    
    });
    it('Validate whether the Darkmode is working or not on the Admin Dashboard', async() => {
        await $('#menu-dashboard').click()
        await browser.pause(3000)
        const darkMoreElem = await $('.wp-toolbar.wp-dark-mode-active')
        const actualDarkModeColor = await darkMoreElem.getAttribute('data-darkmode-scheme')
        const expectedDarkModeColor = 'dark'
        await expect(expectedDarkModeColor).toEqual(actualDarkModeColor)
        console.log('Dark Mode from Admin Dashboard is Validated')        
        
    });
    it('Navigate to the WP Dark Mode & Change Floation Switch Style Settings', async() => {
        await $('#toplevel_page_wp-dark-mode div.wp-menu-name').click()
        await browser.pause(3000)
        const customizationElem = await $('div.wp-dark-mode-admin-sidebar-nav > div:nth-of-type(2) h4')
        await customizationElem.click()
        await browser.pause(3000)
        const swSettingsElem = await $('div.wp-dark-mode-admin-sidebar-nav > div:nth-of-type(2) a:nth-of-type(1)')
        await swSettingsElem.click()
        await browser.pause(3000)
        // const switchElem1 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(1)')
        // const selSwitchElem1 = await switchElem1.getAttribute('class')
        // const switchElem2 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(2)')
        // const selSwitchElem2 = await switchElem2.getAttribute('class')
        const switchElem3 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(3)')
        const selSwitchElem3 = await switchElem3.getAttribute('class')
        const saveBtn1 = await $('button.bg-blue-500');
        if (!selSwitchElem3.includes('_selected')){
            await switchElem3.click()
            console.log('3rd Tile is Selected now')
            await saveBtn1.click()
            await browser.pause(3000)
        } 
        // else if (selSwitchElem2.includes('_selected')){
        //     await switchElem3.click()
        //     console.log('3rd Tile is Selected')
        //     await saveBtn1.click()
        //     await browser.pause(3000)
        // } 
        else {
            // await switchElem1.click()
            console.log('3rd Tile was Selected')
            // await saveBtn1.click()
            await browser.pause(3000)
        }
        // await browser.debug()

    });
    it('Switch Settings - Select Custom Switch size & Scale it to 220', async() => {
        const floatingElem1 = await $('div.gap-8 div.flex > div:nth-of-type(1) > div.gap-1')
        await floatingElem1.scrollIntoView()
        await browser.pause(3000)
        const customElem = await $('div:nth-of-type(6) > span')
        const customFlSwElem = await customElem.getAttribute('class')
        // await customFlSwElem.click()
        const saveBtn2 = await $('button.bg-blue-500');
        const scaleValue1 = await $('div.min-w-56 > input')
        // await saveBtn2.click()
        await browser.pause(3000)
        if (!customFlSwElem.includes('shadow-md')){
            await customElem.click()
            await scaleValue1.dragAndDrop({x: 46, y: 0})
            await saveBtn2.click()
            console.log('Custom Switch is Selected & Scale value is set to 220')
            await browser.pause(3000)
        } else if (customFlSwElem.includes('shadow-md')){
            await scaleValue1.dragAndDrop({x: 46, y: 0})
            await saveBtn2.click()
            console.log('Custom Switch Was Selected & Scale value is set to 220')
            await browser.pause(3000)
        }
        else{
            console.log('Custom Switch was Selected & Scale value was set to 220')
            await browser.pause(3000)
        }        
        
    });
    it('Switch Settings - Change the Floating Switch Position (Left Bottom)', async() => {
        const switchPosition = await $('div.gap-8 > div > div.flex > div:nth-of-type(2) > div.flex-col')
        await switchPosition.scrollIntoView()
        await browser.pause(3000)
        const inactiveleftPosition = await $('div.gap-8 > div > div.flex > div:nth-of-type(2) div.bg-gray-100 > span')
        const inleftText = await inactiveleftPosition.getText()
        const activeLeftPosition = await $('div.gap-8 > div > div.flex > div:nth-of-type(2) div.bg-blue-600 > span')
        const acLeftText = await activeLeftPosition.getText()
        const saveBtn3 = await $('button.bg-blue-500');
        if (inleftText.includes('Left')){
            await inactiveleftPosition.click()
            await saveBtn3.click()
            console.log('Floating Switch Position is selected Left Bottom')
            await browser.pause(3000)
        } else if (acLeftText.includes('Left')){
            console.log('Floating Switch Position is remain selected as Left Bottom')
            // await activeLeftPosition.click()
            // await saveBtn3.click()
            await browser.pause(3000)
        } else {
            console.log('Floating Switch Position was selected Left Bottom')
            await browser.pause(3000)

        }
        
        

    });
    it('Disable Keyboard Shortcut from the Accessibility Settings', async() => {
        const advancedElem = await $('div.wp-dark-mode-admin-sidebar div:nth-of-type(3) > div > div.items-center')
        await advancedElem.click()
        await browser.pause(3000)
        const accessibilityElem = await $('div.wp-dark-mode-admin-sidebar-nav > div:nth-of-type(3) a:nth-of-type(4)')
        await accessibilityElem.click()
        const accessSettings = await $('#wpbody div:nth-of-type(5)')
        await accessSettings.scrollIntoView()
        await browser.pause(3000)
        const keyboardShortcut = await $('div.main-content-body > div > div.gap-5 > div:nth-of-type(1) div.w-auto > div')
        const switchKeyboardShortcut = await keyboardShortcut.getAttribute('class')
        if (!switchKeyboardShortcut.includes('bg-slate-200')){
            await keyboardShortcut.click()
            const saveBtn4 = await $('div.save-buttons > button.bg-blue-500');
            await saveBtn4.click()
            console.log('Keyboard Shortcut is Disabled')
            await browser.pause(3000)
        } else {
            console.log('Keyboard Shortcut was Disabled')
            await browser.pause(3000)
        }          
    });
    it('Enable “Darkmode Toggle Animation” & change the “Animation Effect” from the default selections', async() => {
        const siteAnimationElem = await $('div.wp-dark-mode-admin-sidebar-nav > div:nth-of-type(2) a:nth-of-type(5)') 
        await siteAnimationElem.click()
        await browser.pause(3000)
        const siteAnimation = await $('div.main-content-header h3')
        await siteAnimation.scrollIntoView()
        await browser.pause(3000)
        const animationElem = await $('div.w-auto > div')   
        const actAnimationElem = await animationElem.getAttribute('class')
        if (actAnimationElem.includes('bg-slate-200')){
            await animationElem.click()
            const saveBtn5 = await $('button.bg-blue-500');
            await saveBtn5.click()
            console.log('Animation is Enabled')
            await browser.pause(3000)
        } else {
            console.log('Animation was Enabled')
            await browser.pause(3000)
        }
        const animationEffect = await $('div:nth-of-type(1) > div > div.flex > div.relative div.gap-1')
        await animationEffect.scrollIntoView()
        await browser.pause(3000)
        const effectElem1 = await $('div:nth-of-type(3) > span.flex') //Flip
        const effectElem1Text = await effectElem1.getText()
        const effectElem1Class = await effectElem1.getAttribute('class')
        // const effectElem2 = await $('div:nth-of-type(4) > span.flex')
        // const effectElem2Text = await effectElem2.getText()
        // const effectElem2Class = await effectElem2.getAttribute('class')
        if (!effectElem1Class.includes('border-blue-600')){
            await effectElem1.click()
            const saveBtn6 = await $('button.bg-blue-500');
            await saveBtn6.click()
            console.log(effectElem1Text, ' Animation Effect is Selected')
            await browser.pause(3000)
        } else {
            // await effectElem2.click()
            // const saveBtn6 = await $('button.bg-blue-500');
            // await saveBtn6.click()
            console.log(effectElem1Text, ' Animation Effect was Selected')
            await browser.pause(3000)
        }

    });
    
});

