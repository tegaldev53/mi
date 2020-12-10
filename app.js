const puppeteer = require('puppeteer-extra');
const StealthPlugin = require('puppeteer-extra-plugin-stealth');
puppeteer.use(StealthPlugin());
const config = require('./src/config/browser');
const url = require('./src/config/url');
const target = require('./src/config/target');

// Time
const Timer = require('./src/time/timer');

// Auth
const Auth = require('./src/auth/login');

// Cart
const Atc = require('./src/cart/atc');
const Co = require('./src/cart/co');

const App = async () => {
    const browser = await puppeteer.launch(config);

    browser.on('targetcreated', async function f() {
        let pages = await browser.pages();
        if (pages.length > 1) {
            await pages[0].close();
            browser.off('targetcreated', f);
        }
    });

    // auth
    const loginPage = await browser.newPage();
    const atcP = await browser.newPage();
    const coP = await browser.newPage();

    await Auth(loginPage);

    // goto pages
    await atcP.goto(url.atc);
    await coP.goto(url.co);

    // // Timer
    await Timer('42:50');

    /**
     * Cart
     */

    await Atc(atcP, target, url.atc);

    console.time('reload-co')
    await coP.goto(url.co);
    console.timeEnd('reload-co')

    // console.time('co')
    // await Co(coP, url.co);
    // console.timeEnd('co')
}

App();
