const Atc = (page, target, cart) => {
    return new Promise(async (resolve, reject) => {
        let ids = target.ids;
        let size = ids.length;
        
        let uri;
        console.time('atc')
        for (let i = 0; i < size; i++) {
            uri = cart+ids[i]+'-0-1';
            await page.goto(uri);
        }
        console.timeEnd('atc')

        resolve(true);
    });
}

module.exports = Atc;