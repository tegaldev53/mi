const login = async (loginPage) => {
    return new Promise(async (resolve, reject) => {
        let successUri = 'https://account.xiaomi.com/pass/auth/security/home?cUserId=n1WXpsZXp1qdSrQMSiI1vhYsKpQ&userId=6395799590';
        try {
            await loginPage.goto('https://account.xiaomi.com/pass/serviceLogin', { waitUntil: 'domcontentloaded' });

            // check url
            if (loginPage.url() == 'https://account.xiaomi.com/pass/serviceLogin') {

                await loginPage.evaluate(() => {
                    let user = document.querySelector('#username');
                    let pass = document.querySelector('#pwd');
                    let btn = document.querySelector('#login-button');

                    user.value = 'jaxotto23@gmail.com';
                    pass.value = 'lkjhgfds123';
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