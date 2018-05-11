const fs = require('fs');
const chineseConv = require('chinese-conv');
fs.readdir('./', (err, data) => {
    let files = [];
    files = data.filter(function (file) {
        return file.substr(-5) === '.json';
    });
    files.forEach((file) => {
        fs.readFile(file, 'utf-8', (err, data) => {
            fs.writeFile(file, chineseConv.sify(data), function (err) {
                if (err) throw err;
                console.log(`${file} Replaced!`);
            });
        });
    });
});