/////////////////////////////////////////
const argv = require("./config/yargs").argv;
const colors = require('colors');

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];

switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;

    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(`Archivo creado: ${archivo.brightRed}`))
            .catch((err) => console.log(err));
        break;

    default:
        console.log("Comando no reconocido");
}

//console.log(process.argv);

//console.log(argv.base);
//console.log('limite', argv.limite);

//let parametro = argv[2];
//let base = parametro.split('=')[1];