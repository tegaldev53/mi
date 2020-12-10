const login = async (loginPage) => {
    return new Promise(async (resolve, reject) => {
        let successUri = 'https://account.xiaomi.com/pass/auth/security/home?cUserId=iTj7d8JVoUYTEXUH5y7HLUyWHX4&userId=6390555546';
        try {
            await loginPage.goto('https://account.xiaomi.com/pass/serviceLogin', { waitUntil: 'domcontentloaded' });

            // check url
            if (loginPage.url() == 'https://account.xiaomi.com/pass/serviceLogin') {

                await loginPage.evaluate(() => {
                    let user = document.querySelector('#username');
                    let pass = document.querySelector('#pwd');
                    let btn = document.querySelector('#login-button');

                    user.value = 'ualfaruq59@gmail.com';
                    pass.value = 'umardev155';
                    btn.click();
                });

                await loginPage.waitForNavigation()
                let curUri = await loginPage.url();

                if (curUri == successUri) {
                    console.log('login success')
                    await loginPage.close();
                    resolve(true);
                }
            } else {
                // close the page
                loginPage.close();
                resolve(true);
            }

            // pass loginPage object
            // resolve(result);
        } catch(err) {
            reject(err);
        }
    });
}

module.exports = login;