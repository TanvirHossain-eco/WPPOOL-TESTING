import { expect, browser, $ } from '@wdio/globals'

describe('Validate whether the Darkmode is working or not on the Admin Dashboard', () => {
    it('Floating Switch Styles 3rd Tiles Selection', async() => {
        await browser.maximizeWindow()
        await browser.url('https://dev-wppoolstesting.pantheonsite.io')
        await browser.pause(3000)
        const WPDMSwitchElem3 = await $('div.wp-dark-mode-floating-switch > div > div')
        const flSWStyleElem = await WPDMSwitchElem3.getAttribute('class')
        const expectedStyle = 'wp-dark-mode-switch-styled wp-dark-mode-switch-3'
        await expect(expectedStyle).toEqual(flSWStyleElem)
        console.log('WP Dark Mode 3rd Switch is Validated')
        
        await browser.pause(3000)

    });
    it('Dark Mode Custom Scale value 220', async() => {
        const WPDMSwitchElem2 = await $('div.wp-dark-mode-floating-switch > div > div')
        const switchPositionScale = await WPDMSwitchElem2.getAttribute('style')
        const expectedScale = '--wp-dark-mode-switch-scale: 2.2'
        await expect(expectedScale).toEqual(switchPositionScale)
        console.log('Dark Mode Floating Switch Scale value 220 is Validated')
        await browser.pause(3000)
        
    });
    it('Validate DarkMode Switch Left Position Location', async() => {
        const WPDMSwitchElem = await $('div.wp-dark-mode-floating-switch')
        const SwitchElemPositionX = await WPDMSwitchElem.getLocation('x')
        const SwitchElemPositionY = await WPDMSwitchElem.getLocation('y')
        console.log('Element X Position: ', SwitchElemPositionX)
        console.log('Element Y Position: ', SwitchElemPositionY)
        const expectedX = 10; // Left edge of the screen
        const expectedY = 584; // Bottom edge of the screen
        await expect(SwitchElemPositionX).toEqual(expectedX)
        await expect(SwitchElemPositionY).toEqual(expectedY)
        console.log('Dark Mode Floating Switch Left Position is Validated')
        await browser.pause(6000)
    });    
    it('Keyboard Shortcut Deactivation', async() => {
        await browser.keys(["Control", "Alt", "D"])
        await browser.pause(3000)
        const activeDarkModeElem2 = await $('div.wp-dark-mode-floating-switch > div > div')
        const activeDarkMode2 = await activeDarkModeElem2.getAttribute('class')
        const expectedinActive = 'wp-dark-mode-switch-styled wp-dark-mode-switch-3'
        await expect(expectedinActive).toEqual(activeDarkMode2)
        console.log('Shortcut Keys is remain inactive & Validated')
        await browser.pause(3000)
        
    });

    it('Flip Animation Validation', async() => {
        const frontendDarkMode = await $('div.wp-dark-mode-floating-switch >div > div > div > div:nth-of-type(2)')
        await frontendDarkMode.click()
        await browser.pause(3000)
        const animationDarkMode = await $('.wp-dark-mode-active.wp-dark-mode-animation')
        const animationDarkModeElem = await animationDarkMode.getAttribute('data-wp-dark-mode-animation')
        const expectedanimation = 'flip'
        await expect(expectedanimation).toEqual(animationDarkModeElem)
        console.log("Flip Animation is Validated")
        // console.log('animationDarkModeElem => ', animationDarkModeElem)
    });

});