const axios = require("axios");
const AdmZip = require('adm-zip');
const child_process = require('child_process');


async function main () {
    try {
        child_process.execSync('rm -r tmp/ dist/');
    } catch (err) {
        console.log('Directory might not exist')
    }
    const url = "https://github.com/epfl-si/elements/archive/refs/heads/dist/frontend.zip";
    const body = await axios.get(url, {
        responseType: 'arraybuffer'
    });
    const data = body.data;
    const zip = new AdmZip(data);
    zip.extractAllTo('tmp/', true);
    child_process.execSync('rm -r tmp/elements-dist-frontend/js/');
    child_process.execSync('rm -r tmp/elements-dist-frontend/package.json');
    child_process.execSync('rm -r tmp/elements-dist-frontend/.nojekyll');
    child_process.execSync('mv tmp/elements-dist-frontend/ dist/');
    child_process.execSync('rm -r tmp/');
}

main().then(() => console.log('done'))