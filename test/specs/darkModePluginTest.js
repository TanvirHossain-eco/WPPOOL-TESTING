// const {remote} = require('webdriverio');
// const {assert} = require('chai');
// const dotenv = require('dotenv');

describe('Dark Mode Plugin Testing', () => {
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
    });
    // Need to compress the code - From Here
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
    // Need to compress the code - to here
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
        const darkMoreElem = await $('#wpcontent')
        const actualDarkModeColor = await darkMoreElem.getCSSProperty('background-color')
        const expectedDarkModeColor = '#000000'
        await expect(expectedDarkModeColor).toEqual(actualDarkModeColor.parsed.hex)
        
        if(actualDarkModeColor.parsed.hex.includes('#000000')){
            console.log ('Dark Mode Color is Verified & Dark Mode Color Code: ', actualDarkModeColor.parsed.hex)
        }else{
            console.log ('Dark Mode Color is not Verified & Current Color Code: ', actualDarkModeColor.parsed.hex)
        }
    });
    it('Navigate to the WP Dark Mode & Change Settings', async() => {
        await $('#toplevel_page_wp-dark-mode div.wp-menu-name').click()
        await browser.pause(3000)
        const customizationElem = await $('div.wp-dark-mode-admin-sidebar-nav > div:nth-of-type(2) h4')
        await customizationElem.click()
        await browser.pause(3000)
        const swSettingsElem = await $('div.wp-dark-mode-admin-sidebar-nav > div:nth-of-type(2) a:nth-of-type(1)')
        await swSettingsElem.click()
        await browser.pause(3000)
        const switchElem1 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(1)')
        const selSwitchElem1 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(1)').getAttribute('class')
        const switchElem2 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(2)')
        const selSwitchElem2 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(2)').getAttribute('class')
        const switchElem3 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(3)')
        const selSwitchElem3 = await $('div.bg-transparent > div.gap-6 > div.rounded > div.flex-wrap > div:nth-of-type(3)').getAttribute('class')
        const saveBtn = await $('button.bg-blue-500');
        if (selSwitchElem1.includes('_selected')){
            await switchElem2.click()
            console.log('2nd Tile is Selected')
            await saveBtn.click()
            await browser.pause(3000)
        } else if (selSwitchElem2.includes('_selected')){
            await switchElem3.click()
            console.log('3rd Tile is Selected')
            await saveBtn.click()
            await browser.pause(3000)
        } else {
            await switchElem1.click()
            console.log('1st Tile is Selected')
            await saveBtn.click()
            await browser.pause(3000)
        }
                
    });
    it('Switch Settings - Select Custom Switch size & Scale it to 220', async() => {
        
    });
});

