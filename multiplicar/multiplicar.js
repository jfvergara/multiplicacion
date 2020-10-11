//requires
const fs = require("fs");
const colors = require('colors');

let data = "";
let listarTabla = (base, limite = 10) => {
    console.log('===================='.green);
    console.log(`====Tabla de ${base}====`.green);
    console.log('===================='.green);
    for (let index = 1; index <= limite; index++) {
        data += `${base} x ${index} = ${base * index}\n`;
    }
    console.log(data);
};

let crearArchivo = (base, limite = 10) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            console.log(`El valor introducido (${base}) no es un numero`);
            return;
        }
        let data = "";
        for (let index = 1; index <= limite; index++) {
            data += `${base} x ${index} = ${base * index}\n`;
        }

        fs.writeFile(`tablas/tabla-del-${base}-al-${limite}.txt`, data, (err) => {
            if (err) reject(err);
            else resolve(`tabla-${base}-al-${limite}.txt`);
        });
    });
};


module.exports = {
    crearArchivo,
    listarTabla
};