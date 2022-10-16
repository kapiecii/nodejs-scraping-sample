import axios from 'axios';
import cheerio from 'cheerio';

const URL = '';

axios(URL)
    .then(response => {
        const html = response.data;
        //console.log(html);
        const $ = cheerio.load(html);

        $('.post-item', html).each((item, element) => {
            const title = $(element).find('a').text().replace(/(\r\n|\n|\r|)/gm, '').trim();
            console.log(title);
        });
    }).catch(err => console.error(err));