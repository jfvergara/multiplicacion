const argv = require('./config/yargs').argv;
var colors = require('colors/safe');
colors.setTheme({
    silly: 'rainbow',
    input: 'grey',
    verbose: 'cyan',
    prompt: 'grey',
    info: 'green',
    data: 'grey',
    help: 'cyan',
    warn: 'yellow',
    debug: 'blue',
    error: 'red'
});

const { crearArchivo, listarTabla } = require("./multiplicar/multiplicar");

let comando = argv._[0];
switch (comando) {
    case "listar":
        listarTabla(argv.base, argv.limite);
        break;
    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then((archivo) => console.log(colors.error(`archivo creado`), colors.warn(`${archivo}`)))
            .catch((e) => console.log(e));
        break;
    default:
        console.log("Comando no reconocido");
}

let argv2 = process.argv;

// let parametro = argv[2];
// let base = parametro.split('=')[1];