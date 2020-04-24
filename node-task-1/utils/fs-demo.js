const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const directoryPath = path.join();

let HashAndWrite = (directoryAndFilePath) => {
    const result = fs.readFileSync(directoryAndFilePath, 'utf-8');
    if (!(directoryAndFilePath === './fs-demo.js')) {
        const secret = 'abcdefg';
        const hash = crypto.createHmac('sha256', secret).update(result).digest('hex');
        const hashMD5 = crypto.createHash('md5').update(result).digest('hex');
        const data = directoryAndFilePath + "  " + hash + "  " + hashMD5 + "\n";
        fs.appendFile("hashdata.txt", data, function (err) {
           if (err) throw err;
        });
    }  
}

let recursiveReadingAndHashing = (directoryPath) => {
    files = fs.readdirSync(directoryPath);
    files.forEach((file) => {
        if (fs.statSync(directoryPath + '/' + file).isDirectory()) {
            recursiveReadingAndHashing(directoryPath + '/' + file);
        } else {
            const directoryAndFilePath = directoryPath + '/' + file;
            HashAndWrite(directoryAndFilePath);
        }
    });
}

if(fs.statSync("./hashdata.txt").isFile()){
    {
        fs.writeFile('./hashdata.txt', '', ()=>{console.log('done writing the file')})
    }
}
recursiveReadingAndHashing(directoryPath);



