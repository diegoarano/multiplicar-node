////////////////////////////////////////////////

//  REQUIREDS

const fs = require('fs');
const colors = require('colors');
//const { resolve } = require('path');
//const { rejects } = require('assert');

let listarTabla = (base, limite = 10) => {

    console.log('==========================='.grey);
    console.log(`tabla de ${base}`.blue);
    console.log('==========================='.gray);

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} * ${i} = ${base * i}`);

    }
}


let crearArchivo = (base, limite = 10) => {

    // console.log(`se crea tabla-${base}-al-${limite}.txt `)

    return new Promise((resolve, reject) => {

        if (!Number(base)) {

            reject(`El valor ${base} introducido,  no es un numero`);
            return
        }

        let data = '';

        for (let i = 1; i <= limite; i++) {
            data += `${base} * ${i} = ${base * i}\n`;

        }


        fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => {

            if (err) reject(err);
            else
                resolve(`tabla-${base}-al-${limite}.txt`)


        });

    });
}

module.exports = {
    crearArchivo,
    listarTabla
}