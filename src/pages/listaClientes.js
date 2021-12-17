// MODULOS
import consultaCliente from "./consultaCliente.js";
import crearNuevoCliente from "./crearNuevoCliente.js";
import {getClientes, delCliente} from "../helpers/objetoClientes.js";
import analisis from "./analisis.js";
import AnalisisImg from "../img/analisis.jpg";
import clientesImg from "../img/clientes.jpg";

// CLASSE
class listaClientes {

    constructor(clientes) {
        this.clientes = clientes;
        this.renderPagina();
    }

    renderPagina() {

        document.body.innerHTML = "";
        document.body.style = "";
        document.body.classList.add("fondo");

        const contenedor = document.createElement("div");
        contenedor.classList.add("contenedorLista");

        // ENCABEZADO PÁGINA

        const EncabezadoPagina = document.createElement("div");
        EncabezadoPagina.classList.add("EncabezadoPagina");
        
        const TituloPagina = document.createElement("h1");
        TituloPagina.textContent = "EcoValue";
        TituloPagina.classList.add("TituloPagina");

        const SubTituloPagina = document.createElement("h3");
        SubTituloPagina.textContent = "Invertir es una obligación";
        SubTituloPagina.classList.add("SubTituloPagina");

        const botonInicio = document.createElement("button");
        botonInicio.classList.add("btn", "btn-danger");
        botonInicio.textContent = "Logout";
        botonInicio.addEventListener("click", () => volverInicio());

        EncabezadoPagina.append(TituloPagina, SubTituloPagina, botonInicio);
        contenedor.append(EncabezadoPagina);

        // CUERPO PÁGINA

        const titulo = document.createElement("h1");
        titulo.classList.add("tituloLista");
        titulo.textContent = "Listado de Clientes";

        contenedor.append(titulo);

        // FUNCIÓN AUTOINVOCADA
        (function () {
            const parrafoDescripcion = document.createElement("p");
            let nuevoCli = localStorage.getItem("Usuario");
            if (nuevoCli != null) {
                parrafoDescripcion.textContent = "El último cliente dado de alta ha sido: " + nuevoCli; // LOCALSTORAGE
            } else {
                console.log("Nada");
            }
                
            contenedor.append(parrafoDescripcion);
        })();

        let tablaClientes = document.createElement("table");
        tablaClientes.classList.add("table");

        let thead = document.createElement("thead");
        thead.classList.add("cabeceraTabla");

        let filaEncabezado = document.createElement("tr");

        let th1 = document.createElement("th");
        th1.textContent = "Identificador";
        let th2 = document.createElement("th");
        th2.textContent = "Cliente";
        let th3 = document.createElement("th");
        th3.textContent = "Acción";

        filaEncabezado.append(th1,th2,th3);

        thead.append(filaEncabezado);

        tablaClientes.append(thead);

        const tbody = document.createElement("tbody");
        tbody.classList.add("cuerpoTabla");

        getClientes().then((datosItems) => { // ACCEDEMOS A LOS CLIENTES Y LOS LISTAMOS

            for ( let cliente in this.clientes) { // ITERABLE

                // VARIABLES LET
                let fila = document.createElement("tr");
                fila.classList.add("filasTabla");
    
                let celda1 = document.createElement("td");
                celda1.textContent = cliente;
    
                let celda2 = document.createElement("td");
                celda2.classList.add("NombreCliente");
                celda2.textContent = datosItems[cliente]["Name"];
    
                let celda3 = document.createElement("td");
                let boton = document.createElement("button");
                boton.classList.add("botonLista");
                boton.textContent = "Operar";
                boton.addEventListener("click", ()=> opcionesCliente(cliente));
                let botonElim = document.createElement("button");
                botonElim.classList.add("botonBorrar");
                botonElim.textContent = "Eliminar Cliente";
                botonElim.addEventListener("click", ()=> borrarCliente(cliente));
                celda3.append(boton, botonElim);
    
                fila.append(celda1,celda2, celda3);
                tbody.append(fila);
                
            }

        });

        tablaClientes.append(tbody);
        contenedor.append(tablaClientes);

        const tituloApartados = document.createElement("h1");
        tituloApartados.classList.add("tituloLista");
        tituloApartados.textContent = "Apartados";

        contenedor.append(tituloApartados);

        const divContenedorCards = document.createElement("div");
        divContenedorCards.classList.add("row");
        contenedor.append(divContenedorCards);

        const divCard1 = document.createElement("div");
        divCard1.classList.add("card", "m-3");
        divCard1.style.width = "18rem";
        divContenedorCards.append(divCard1);
        const imagen1 = new Image(300, 200);
        imagen1.classList.add("card-img-top");
        imagen1.src = clientesImg;
        divCard1.append(imagen1);
        const divInterior1 = document.createElement("div");
        divInterior1.classList.add("card-body");
        divCard1.append(divInterior1);
        const title1 = document.createElement("h5");
        title1.classList.add("card-title");
        title1.textContent = "Alta Clientes";
        divInterior1.append(title1);
        const p1 = document.createElement("p");
        p1.classList.add("card-text");
        p1.textContent = "Añadir clientes a la cartera";
        divInterior1.append(p1);
        const botonClientes = document.createElement("button");
        botonClientes.classList.add("btn", "btn-success");
        botonClientes.textContent = "Alta Cliente";
        botonClientes.addEventListener("click", () => crearCliente());
        divInterior1.append(botonClientes);

        const divCard2 = document.createElement("div");
        divCard2.classList.add("card", "m-3");
        divCard2.style.width = "18rem";
        divContenedorCards.append(divCard2);
        const imagen2 = new Image(300, 200);
        imagen2.classList.add("card-img-top");
        imagen2.src = AnalisisImg;
        divCard2.append(imagen2);
        const divInterior2 = document.createElement("div");
        divInterior2.classList.add("card-body");
        divCard2.append(divInterior2);
        const title2 = document.createElement("h5");
        title2.classList.add("card-title");
        title2.textContent = "Analisis de Valores";
        divInterior2.append(title2);
        const p = document.createElement("p");
        p.classList.add("card-text");
        p.textContent = "Guia senzilla para analisis de Valores"
        divInterior2.append(p);
        const botonAnalisis = document.createElement("button");
        botonAnalisis.classList.add("btn", "btn-success");
        botonAnalisis.textContent = "Analizar Valores";
        botonAnalisis.addEventListener("click", () => getAnalisis());
        divInterior2.append(botonAnalisis);

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

    };

}

// FUNCIONES FLEXA
const opcionesCliente = (cliente) => {
    const consultCli = new consultaCliente(cliente);
}

const crearCliente = () => {
    const crear = new crearNuevoCliente();
}

const getAnalisis = () => {
    const AN = new analisis();
}

const borrarCliente = (cliente) => {
    alert("Se va a borrar el cliente!!");
    delCliente(cliente);
    setTimeout(() => {
        getClientes().then( (datosItems) => {
            const listCli = new listaClientes(datosItems);
        });
   }, 1000);
}

const volverInicio = () => {
    location.reload();
}

export default listaClientes;