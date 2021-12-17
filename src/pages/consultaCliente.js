// MODULOS
import {getClientes} from "../helpers/objetoClientes.js";
import listaClientes from "./listaClientes.js";
import carteraCliente from "./carteraCliente.js";
import compraValor from "./compraValor.js";

// CLASSES
class consultaCliente {

    constructor(cliente){
        this.cliente = cliente;
        this.renderPagina();
    }

    renderPagina() {

        console.log( "Cliente elegido: " + this.cliente);

        document.body.innerHTML = "";

        const contenedor = document.createElement("div");
        contenedor.classList.add("container");

        // ENCABEZADO

        const EncabezadoPagina = document.createElement("div");
        EncabezadoPagina.classList.add("EncabezadoPagina");
                
        const TituloPagina = document.createElement("h1");
        TituloPagina.textContent = "EcoValue";
        TituloPagina.classList.add("TituloPagina");
        
        const SubTituloPagina = document.createElement("h3");
        SubTituloPagina.textContent = "Invertir es una obligación";
        SubTituloPagina.classList.add("SubTituloPagina");

        EncabezadoPagina.append(TituloPagina, SubTituloPagina);
        contenedor.append(EncabezadoPagina);
        
        // FIN ENCABEZADO

        const botonVolver = document.createElement("button");
        botonVolver.classList.add("botonVolver");
        botonVolver.textContent = "Volver Clientes";
        botonVolver.addEventListener("click", () => volverClientes());

        contenedor.append(botonVolver);

        const h1 = document.createElement("h1");
        h1.classList.add("tituloConsulta");
        h1.textContent = "Operación a realizar:"

        const contendorBotones = document.createElement("div");
        contendorBotones.classList.add("container-fluid");

        const filaBotones = document.createElement("div");
        filaBotones.classList.add("row");

        const div1 = document.createElement("button");
        div1.classList.add("btn");
        div1.classList.add("btn-success");
        div1.addEventListener("click", () => compraPosicion(this.cliente));
        div1.textContent = "Comprar Valores";

        const div2 = document.createElement("button");
        div2.classList.add("btn");
        div2.classList.add("btn-primary");
        div2.classList.add("mt-2");
        div2.addEventListener("click", () => verPosiciones(this.cliente));
        div2.textContent = "Posiciones en Cartera";

        filaBotones.append(div1, div2);

        contendorBotones.append(filaBotones);

        contenedor.append(h1, contendorBotones);

        // INICIO FOOTER

        const FooterPagina = document.createElement("footer");
        FooterPagina.classList.add("Footer");
        const TextoFooter = document.createElement("p");
        TextoFooter.textContent = "Copyright @EcoValue Gestión de Carteras - 2021 - Todos los derechos Reservados";
        TextoFooter.classList.add("TextoFooter");
        FooterPagina.append(TextoFooter);

        contenedor.append(FooterPagina);

        // FIN FOOTER

        document.body.append(contenedor);

    }

}

const compraPosicion = (cliente) => {
    console.log(cliente);
    const compra = new compraValor(cliente);
}

const verPosiciones = (cliente) => {// LE DEBEMOS PASAR EL NOMBE DEL CLIENTE PARA RENDERIZAR DICHA PAGINA
    console.log(cliente);
    const carteraCli = new carteraCliente(cliente);
}

const volverClientes = () => {
    getClientes().then( (datosItems) => {
        const listCli = new listaClientes(datosItems);
    });
}

export default consultaCliente;