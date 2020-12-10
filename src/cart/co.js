const Atc = (page, co) => {
    return new Promise(async (resolve, reject) => {
       await page.goto(co, {waitUntil: 'domcontentloaded'});

       resolve(true);
    });
}

module.exports = Atc;