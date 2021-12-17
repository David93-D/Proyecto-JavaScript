// MODULOS
import listaClientes from "./listaClientes.js";
import {getClientes, anyadirCliente} from "../helpers/objetoClientes.js";

// CLASSES
class crearNuevoCliente {

    constructor() {
        this.renderPagina();
    }

    renderPagina() {

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

        // FORMULARIO NUEVO CLIENTE
        const form = document.createElement("form");
        form.style.textAlign = "center";
        form.style.backgroundColor = "#5d96b1";
        form.style.border = "#407690";
        form.style.borderRadius = "10px";
        const legend = document.createElement("legend");
        legend.textContent = "Introduce nombre y apellidos del cliente:"
        legend.style.textAlign = "center";
        form.append(legend);

        // INPUT NOMBRE DEL CLIENTE
        const divNombreCliente = document.createElement("div");
        divNombreCliente.classList.add("form-group", "p-2");
        const labelNombreCliente = document.createElement("label");
        labelNombreCliente.style.textAlign = "center";
        labelNombreCliente.textContent = "Introduce Nombre y Apellidos del cliente:";
        divNombreCliente.append(labelNombreCliente);
        const inputNombreCliente = document.createElement("input");
        inputNombreCliente.setAttribute("id", "nombreCliente");
        inputNombreCliente.type = "text";
        divNombreCliente.append(inputNombreCliente);

        // BOTON
        const divButton = document.createElement("button");
        divButton.textContent = "Crear Cliente";
        divButton.classList.add("form-group", "p-2");
        divButton.addEventListener("click", e => { e.preventDefault(); altaCliente() });
        divButton.setAttribute("id", "ejecutarCrear");

        form.append(divNombreCliente, divButton);
        contenedor.append(form);

        document.body.append(contenedor);

    }

}

const altaCliente = () => {
    const nombre = document.querySelector("#nombreCliente").value;
    console.log(nombre);
    localStorage.setItem("Usuario", nombre); // LOCALSTORAGE
    alert("Se va a crear el cliente: " + localStorage.getItem("Usuario"));
    anyadirCliente(nombre);
    setTimeout(() => {
        volverClientes();
   }, 1000);   
}

const volverClientes = () => {
    getClientes().then( (datosItems) => {
        const listCli = new listaClientes(datosItems);
    });
}

export default crearNuevoCliente;
