import '../dist/CSS/estilos.css';
import '../dist/cssBootstrap/bootstrap.min.css';
import 'mocha/mocha.css'; 
import mocha from "mocha/mocha-es2018"; 
import './test/test.js';
import listaClientes from "./pages/listaClientes.js";
import {getClientes, getUsuario} from "./helpers/objetoClientes.js";

export function comprobarString() { // TEST
  return "david";
}

function LogIn(e) {
    e.preventDefault();

    // VARIABLES CONST
    const user = document.querySelector("#usuario").value;
    const pass = document.querySelector("#contraseña").value;

    getUsuario().then((datosUsuario) => { // ACCEDEMOS A LOS DATOS DE USUARIO PARA ACCEDER
        if ( datosUsuario["usuario"] == user && datosUsuario["contrasenya"] == pass) {
            getClientes().then( (datosItems) => { // LISTAMOS LOS CLIENTES
                const listCli = new listaClientes(datosItems);
            });
        }
    });

}

document.addEventListener('DOMContentLoaded', function () {
    document.querySelector("#inicio").addEventListener("click", LogIn);
    mocha.run();
});