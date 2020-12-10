const Atc = (page, target, cart, fetch) => {
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

        // const atc = await page.evaluate(() => {
        //     const ids = [
        //         "4204700004",
        //         "4204700003",
        //         "4202800008",
        //         "4202800007"
        //     ];

        //     const size = ids.length;

        //     return new Promise(async (res, rej) => {
        //         try {
        //             console.time('start')
        //             for (let i = 0; i < size; i++) {
        //                 let response = await fetch(`https://go.buy.mi.co.id/id/cart/add/?from=pc&id=${ids[i]}-0-1`, {
        //                     "headers": {
        //                         "accept": "application/json",
        //                         "accept-language": "en-US,en;q=0.9",
        //                         "sec-fetch-dest": "empty",
        //                         "sec-fetch-mode": "cors",
        //                         "sec-fetch-site": "same-site",
        //                         "cookie": "_ot_use_type=1; _ot_instance_id=4c5eff7649bda5e343087d4a6465a668; hasReview=false; _ot_session_id=1607559565058; _ot_last_source=; _ot_utm_type=; _ot_utm_channel=; _ot_utm_campaign=; _ot_utm_source=; _ot_utm_medium=; _ot_utm_term=; _ot_utm_content=; STATSESSIONID=1859596211; msgNum=0; _ot_prev_uri_path=https://mobile.mi.co.id/id/; _ot_view_tip=16.29.5.7.2915.28510619; _ot_ref_tip=; serviceToken=Ejxy9SZtEO72bVZAD%2Fhxqm%2Be71BzGk4Lk2Ascn1YLlhHzWBvMw1t6Ba90hzNhBYvXygikDoxc1NaStGAij%2Bb19A35x9%2BMgMTc4Irvj%2FKtd0x1c5ZvNJr5fP9sYUW9Qh4fPdZOHkVJ0YpmYCxKifvX3BrwrToL523hW4towhhhn4%3D; xm_user_id_num=0; _ot_referrer_path=; _ot_curr_uri_path=https://buy.mi.co.id/id/cart; _ot_ref_b=8; _ot_last_time=1607561559151; STATDOMAINID=; STATTIMESTAMP=1607561559224; xmuuid=XMGUEST-E678E387-AB07-E49D-0776-966E9F81E84D; mstuid=1607556467029_8993; _ga=GA1.3.1334337787.1607556602; _gid=GA1.3.367479180.1607556602; lastsource=mobile.mi.co.id; _gat=1; cUserId=iTj7d8JVoUYTEXUH5y7HLUyWHX4; mUserId=0A2I1U8ikDKk4Q%2BaRi6t74TGzUKJYP7lNsVfYQoqXFE%3D; xm_order_btauth=935c4dcb0d2ab34c609c4f966c4689bc; msttime=https%3A%2F%2Fbuy.mi.co.id%2Fid%2Fcart; msttime1=https%3A%2F%2Fbuy.mi.co.id%2Fid%2Fcart; xm_vistor=1607556467029_8993_1607560955249-1607561542829; xm_user_id_num=0; mstz=3203200034--buy_click|https%3A%2F%2Fm.buy.mi.co.id%2Fid%2Fcart%2F|1859596211.34|pcpid||"
        //                     },
        //                     "referrer": "https://m.buy.mi.co.id/id/item/3203200034",
        //                     "referrerPolicy": "no-referrer-when-downgrade",
        //                     "body": null,
        //                     "method": "GET",
        //                     "mode": "cors"
        //                 });

        //                const data = await response.json();
        //                console.log(data);
        //             }

        //             res(true);
        //           console.timeEnd('start')
        //         } catch(err) {
        //           rej(err);
        //         }
        //     }); // Promise
        // }); // eval



        resolve(true);
    });
}

module.exports = Atc;