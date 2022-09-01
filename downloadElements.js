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
    
    // Extract files and delete unused ones.
    zip.extractAllTo('tmp/', true);
    child_process.execSync('rm -r tmp/elements-dist-frontend/js/');
    child_process.execSync('rm -r tmp/elements-dist-frontend/package.json');
    child_process.execSync('rm -r tmp/elements-dist-frontend/.nojekyll');
    child_process.execSync('mv tmp/elements-dist-frontend/ dist/');

    // Copy local style file
    child_process.execSync('cp src/css/styles.css dist/css/');

    // Combine files
    child_process.execSync('cat dist/css/*.min.css dist/css/styles.css > dist/css/combined.css');

    // Clean up.
    child_process.execSync('rm -r tmp/');

}

main().then(() => console.log('done'))