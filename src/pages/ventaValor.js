// MODULOS
import {getClientes, delPosicion, reducirValores, reducirTotal} from "../helpers/objetoClientes.js";
import carteraCliente from "./carteraCliente.js";

// CLASSE
class ventaValor {

    constructor(cliente, posicion) {
        this.cliente = cliente;
        this.posicion = posicion;

        getClientes().then((datosItems) => { 
            const ticker = datosItems[this.cliente]["cartera"][this.posicion]["Ticker"];
            let precioMedio = datosItems[this.cliente]["cartera"][this.posicion]["PrecioMedio"];
            let cantidad = datosItems[this.cliente]["cartera"][this.posicion]["Cantidad"];
            this.renderPagina();
            this.precioValor(this.cliente, this.posicion, ticker, precioMedio, cantidad);
        });

    }

    precioValor(cliente, posicion, ticker, precioMedio, cantidad) {

        console.log("cliente del valor: " + cliente);
        console.log("Valor a consultar:" + posicion );
        console.log("Ticker: " + ticker);

        let fecha = new Date();
        let añoActual = fecha.getFullYear();
        let mesActual = fecha.getMonth() + 1;
        let ayer = fecha.getDate() - 1;
    
        if (ayer < 10) {
            ayer = ("0" + (fecha.getDate() - 1)).slice(-2);
        }
    
        //const fechaActual = añoActual + "-" + mesActual + "-" + ayer;

        const fechaActualProvisional = "2021-11-05"; // Cuando el dia de ayer la bolsa no abrió

        // API CON RESPUESTA JSON
        let url = `https://api.polygon.io/v1/open-close/${ticker}/${fechaActualProvisional}?adjusted=true&apiKey=eCI2fh7a4zipFKtXBhTX5zDvr_6V3whw`; //Hay que cambiar el stock para que no de error
        fetch(`${url}`)
            .then((response) => response.json())
            .then(data => obtenerDatos(data));

        // FUNCION
        function obtenerDatos(data) {
            // QUERYSELECTORS
            document.querySelector("#disponible").value = cantidad;
            document.querySelector("#precioMedio").value = precioMedio;

            // CLOSURES
            let precioCotizacion = document.querySelector("#cotizacion").value = data.close;

            let porcentaje = (((precioCotizacion - precioMedio)/precioMedio).toFixed(2)) + " %";

            document.querySelector("#porcentaje").value = porcentaje;
            
            let comision = document.querySelector("#comision").value = 10;
            
            document.querySelector("#cantidad").addEventListener("focusout", () => {
                console.log("Funciona FocusOut!!!!");
                let cantidadVenta = document.querySelector("#cantidad").value;
                let total = (cantidadVenta * precioCotizacion) + comision;
                document.querySelector("#total").value = total;
            });
            
        }

    }

    renderPagina() {

        // MANIPULACIÓN DEL DOM
        document.body.innerHTML = "";

        const contenedorVenta = document.createElement("div");
        contenedorVenta.classList.add("container", "mt-5");

        // ENCABEZADO PÁGINA

        const EncabezadoPagina = document.createElement("div");
        EncabezadoPagina.classList.add("EncabezadoPagina");
        
        const TituloPagina = document.createElement("h1");
        TituloPagina.textContent = "EcoValue";
        TituloPagina.classList.add("TituloPagina");

        const SubTituloPagina = document.createElement("h3");
        SubTituloPagina.textContent = "Invertir es una obligación";
        SubTituloPagina.classList.add("SubTituloPagina");

        EncabezadoPagina.append(TituloPagina, SubTituloPagina);
        contenedorVenta.append(EncabezadoPagina);

        // FIN ENCABEZADO PÁGINA

        const boton = document.createElement("button");
        boton.classList.add("botonVolver");
        boton.textContent = "Volver a lista Valores";
        boton.addEventListener("click", ()=> volverValores(this.cliente));
        contenedorVenta.append(boton);

        const form = document.createElement("form");
        form.style.textAlign = "center";
        form.style.backgroundColor = "#5d96b1";
        form.style.border = "#407690";
        form.style.borderRadius = "10px";
        const legend = document.createElement("legend");
        legend.textContent = "Venta de Posición:"
        legend.style.textAlign = "center";
        form.append(legend);

        // INPUT DE NÚMERO DE VALORES DISPONIBLES
        const divDisponibles = document.createElement("div");
        divDisponibles.classList.add("form-group", "p-2");
        const labelDisponible = document.createElement("label");
        labelDisponible.style.textAlign = "center";
        labelDisponible.textContent = "Nº de Valores disponibles:";
        divDisponibles.append(labelDisponible);
        const inputDisponible = document.createElement("input");
        inputDisponible.setAttribute("id", "disponible");
        inputDisponible.type = "number";
        inputDisponible.readOnly = true;
        divDisponibles.append(inputDisponible);

        // INPUT DE NÚMERO DE VALORES EN VENTA
        const divCantidad = document.createElement("div");
        divCantidad.classList.add("form-group", "p-2");
        const labelCantidad = document.createElement("label");
        labelCantidad.style.textAlign = "center";
        labelCantidad.textContent = "Introduce nº de Valores a vender:";
        divCantidad.append(labelCantidad);
        const inputCantidad = document.createElement("input");
        inputCantidad.setAttribute("id", "cantidad");
        inputCantidad.type = "number";
        divCantidad.append(inputCantidad);

        // INPUT DE PRECIO MEDIO DE COMPRA
        const divPrecioMedio = document.createElement("div");
        divPrecioMedio.classList.add("form-group", "p-2");
        const labelPrecioMedio = document.createElement("label");
        labelPrecioMedio.textContent = "Precio Medio de Compra del Valor:";
        divPrecioMedio.append(labelPrecioMedio);
        const inputPrecioMedio = document.createElement("input");
        inputPrecioMedio.setAttribute("id", "precioMedio")
        inputPrecioMedio.readOnly = true;
        divPrecioMedio.append(inputPrecioMedio);

        // INPUT PRECIO DE COTIZACIÓN DEL VALOR
        const divCotizacion = document.createElement("div");
        divPrecioMedio.classList.add("form-group", "p-2");
        const labelCotizacion = document.createElement("label");
        labelCotizacion.textContent = "Precio de Cotización Actual:";
        divCotizacion.append(labelCotizacion);
        const inputCotizacion = document.createElement("input");
        inputCotizacion.setAttribute("id", "cotizacion");
        inputCotizacion.readOnly = true;
        divCotizacion.append(inputCotizacion);

        // INPUT PORCENTAJE BENF/PERD
        const divBenef = document.createElement("div");
        divBenef.classList.add("form-group", "p-2");
        const labelBenef = document.createElement("label");
        labelBenef.textContent = "Porcentaje de Beneficio/Perdida:";
        divBenef.append(labelBenef);
        const inputBenef = document.createElement("input");
        inputBenef.setAttribute("id", "porcentaje");
        inputBenef.readOnly = true;
        divBenef.append(inputBenef);

        // COMISIÓN POR OPERACIÓN
        const divComision = document.createElement("div");
        divComision.classList.add("form-group");
        const labelComision = document.createElement("label");
        labelComision.textContent = "Comisión por Operación:";
        divComision.append(labelComision);
        const inputComision = document.createElement("input");
        inputComision.setAttribute("id", "comision");
        inputComision.readOnly = true;
        divComision.append(inputComision);

        // TOTAL OPERACIÓN
        const divTotal = document.createElement("div");
        divTotal.classList.add("form-group", "p-2");
        const labelTotal = document.createElement("label");
        labelTotal.textContent = "Total operación:";
        divTotal.append(labelTotal);
        const inputTotal = document.createElement("input");
        inputTotal.setAttribute("id", "total");
        inputTotal.readOnly = true;
        divTotal.append(inputTotal);

        // BOTON
        const divButton = document.createElement("button");
        divButton.textContent = "Ejecutar Venta";
        divButton.classList.add("form-group", "p-2");
        divButton.addEventListener("click", e => { e.preventDefault(); operacionVenta(this.cliente, this.posicion) });
        divButton.setAttribute("id", "ejecutarVenta");


        form.append(divDisponibles, divCantidad, divPrecioMedio, divCotizacion, divBenef, divComision, divTotal, divButton);
        contenedorVenta.append(form);
        document.body.append(contenedorVenta);

        // INICIO FOOTER

        const FooterPagina = document.createElement("footer");
        FooterPagina.classList.add("Footer");
        const TextoFooter = document.createElement("p");
        TextoFooter.textContent = "Copyright @EcoValue Gestión de Carteras - 2021 - Todos los derechos Reservados";
        TextoFooter.classList.add("TextoFooter");
        FooterPagina.append(TextoFooter);
        
        contenedorVenta.append(FooterPagina);
        
        // FIN FOOTER

    }

}

const volverValores = (cliente) => {
    console.log("Vuelta a la lista de valores!!!");
    const carteraCli = new carteraCliente(cliente);
}

const operacionVenta = (cliente, posicion) => {
    console.log("Funciona Venta!!!");

    let cantidadVender = document.querySelector("#cantidad").value;
    console.log("Cantidad venta: " + cantidadVender);
    let cantDisponible = document.querySelector("#disponible").value;
    console.log("Cantidad disponible: " + cantDisponible);

    // VALIDACIÓN DE FORMULARIO
    if (cantidadVender > cantDisponible) {
        alert("El número de acciones a vender es superior a las poseidas, introduzca una cantidad menor");
        const venta = new ventaValor(cliente, posicion);
    } else {
        let cantRestante = cantDisponible - cantidadVender;
        if (cantRestante == 0) {
            console.log("Ha vendido todas las acciones de la posición");
            delPosicion(cliente, posicion);
        } else {
            console.log("Ha vendido una parte");
            getClientes().then((datosItems) => {
                let precioM = datosItems[cliente]["cartera"][posicion]["PrecioMedio"];
                let nuevoTotal = precioM * cantRestante;
                reducirValores(cliente, posicion, cantRestante);
                reducirTotal(cliente, posicion, nuevoTotal);
            });
        }

        setTimeout(() => {
            volverValores(cliente);
        }, 1000);
    }

}

export default ventaValor;