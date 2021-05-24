const fs = require('fs'); 

const createFile = ( base = 9) => {

    console.log('===================');
    console.log(`Tabla del:`, base);
    console.log('===================');

    let output = '';

    for ( let i = 1; i < 11; i++ ) {
        output += `${ base } x ${ i } = ${ base * i }\n`;
    }

    fs.writeFileSync(`tablaDel${base}.txt`, output);
    
    console.log('The file has been saved!');
}

module.exports = { createFile };