// MODULOS
import consultaCliente from "./consultaCliente.js";
import carteraCliente from "./carteraCliente.js";
import { getClientes, getCartera, addPosicion } from "../helpers/objetoClientes";
import {buscaTicker} from "../helpers/buscaTicker";

class compraValor {

    constructor(cliente) {
        this.cliente = cliente;
        this.renderPagina();
    }

    renderPagina() {
        
        document.body.innerHTML = "";
        const contenedorCompra = document.createElement("div");
        contenedorCompra.classList.add("container", "mt-5");

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
        contenedorCompra.append(EncabezadoPagina);

        // FIN ENCABEZADO PÁGINA

        const boton = document.createElement("button");
        boton.classList.add("botonVolver");
        boton.textContent = "Volver Clientes";
        boton.addEventListener("click", ()=> volverConsultaClientes(this.cliente));
        contenedorCompra.append(boton);

        const form = document.createElement("form");
        form.style.textAlign = "center";
        form.style.backgroundColor = "#5d96b1";
        form.style.border = "#407690";
        form.style.borderRadius = "10px";
        const legend = document.createElement("legend");
        legend.textContent = "Comprar de Valores:"
        legend.style.textAlign = "center";
        form.append(legend);


        // INPUT DE ELEGIR EL VALOR A COMPRAR
        const divValor = document.createElement("div");
        divValor.classList.add("form-group", "p-2");
        const labelValor = document.createElement("label");
        labelValor.style.textAlign = "center";
        labelValor.textContent = "Indica el valor a comprar:";
        divValor.append(labelValor);
        const selectValor = document.createElement("select");
        selectValor.setAttribute("id", "selectValor");
        selectValor.addEventListener("change", () => { mostrarOperaciones(); })
        divValor.append(selectValor);
        const opt0 = document.createElement("option");
        opt0.value = "-";
        opt0.textContent = "Seleccione un valor";
        selectValor.append(opt0);

        const opt1 = document.createElement("option");
        opt1.value = "Amazon";
        opt1.textContent = "Amazon";
        selectValor.append(opt1);
        const opt2 = document.createElement("option");
        opt2.value = "American Express";
        opt2.textContent = "American Express";
        selectValor.append(opt2);
        const opt3 = document.createElement("option");
        opt3.value = "Apple";
        opt3.textContent = "Apple";
        selectValor.append(opt3);
        const opt4 = document.createElement("option");
        opt4.value = "Boeing";
        opt4.textContent = "Boeing";
        selectValor.append(opt4);
        const opt5 = document.createElement("option");
        opt5.value = "Caterpillar";
        opt5.textContent = "Caterpillar";
        selectValor.append(opt5);
        const opt6 = document.createElement("option");
        opt6.value = "Chevron";
        opt6.textContent = "Chevron";
        selectValor.append(opt6);
        const opt7 = document.createElement("option");
        opt7.value = "Cisco Systems";
        opt7.textContent = "Cisco Systems";
        selectValor.append(opt7);
        const opt8 = document.createElement("option");
        opt8.value = "Coca-Cola";
        opt8.textContent = "Coca-Cola";
        selectValor.append(opt8);
        const opt9 = document.createElement("option");
        opt9.value = "IBM";
        opt9.textContent = "IBM";
        selectValor.append(opt9);
        const opt10 = document.createElement("option");
        opt10.value = "Intel";
        opt10.textContent = "Intel";
        selectValor.append(opt10);
        const opt11 = document.createElement("option");
        opt11.value = "Johnson & Johnson";
        opt11.textContent = "Johnson & Johnson";
        selectValor.append(opt11);
        const opt12 = document.createElement("option");
        opt12.value = "JP Morgan Chase";
        opt12.textContent = "JP Morgan Chase";
        selectValor.append(opt12);
        const opt13 = document.createElement("option");
        opt13.value = "MCDonalds";
        opt13.textContent = "MCDonalds";
        selectValor.append(opt13);
        const opt14 = document.createElement("option");
        opt14.value = "Merck";
        opt14.textContent = "Merck";
        selectValor.append(opt14);
        const opt15 = document.createElement("option");
        opt15.value = "Microsoft";
        opt15.textContent = "Microsoft";
        selectValor.append(opt15);
        const opt16 = document.createElement("option");
        opt16.value = "Netflix";
        opt16.textContent = "Netflix";
        selectValor.append(opt16);
        const opt17 = document.createElement("option");
        opt17.value = "Nike";
        opt17.textContent = "Nike";
        selectValor.append(opt17);
        const opt18 = document.createElement("option");
        opt18.value = "Procter & Gamble";
        opt18.textContent = "Procter & Gamble";
        selectValor.append(opt18);
        const opt19 = document.createElement("option");
        opt19.value = "Salesforce.com";
        opt19.textContent = "Salesforce.com";
        selectValor.append(opt19);
        const opt20 = document.createElement("option");
        opt20.value = "Tesla";
        opt20.textContent = "Tesla";
        selectValor.append(opt20);

        // INPUT DEL TICKER
        const divTicker = document.createElement("div");
        divTicker.classList.add("form-group", "p-2");
        const labelTicker = document.createElement("label");
        labelTicker.style.textAlign = "center";
        labelTicker.textContent = "Ticker:";
        divTicker.append(labelTicker);
        const inputTicker = document.createElement("input");
        inputTicker.setAttribute("id", "tickerValor");
        inputTicker.readOnly = true;
        divTicker.append(inputTicker);


        // INPUT DEL MERCADO EN QUE COTIZA EL VALOR
        const divMercado = document.createElement("div");
        divMercado.classList.add("form-group", "p-2");
        const labelMercado = document.createElement("label");
        labelMercado.style.textAlign = "center";
        labelMercado.textContent = "Mercado en que cotiza:";
        divMercado.append(labelMercado);
        const inputMercado = document.createElement("input");
        inputMercado.setAttribute("id", "mercado");
        inputMercado.readOnly = true;
        divMercado.append(inputMercado);

        // INPUT DE NÚMERO DE VALORES A COMPRAR
        const divCantidad = document.createElement("div");
        divCantidad.classList.add("form-group", "p-2");
        const labelCantidad = document.createElement("label");
        labelCantidad.style.textAlign = "center";
        labelCantidad.textContent = "Introduce nº de Valores a comprar:";
        divCantidad.append(labelCantidad);
        const inputCantidad = document.createElement("input");
        inputCantidad.setAttribute("id", "cantidadCompra");
        inputCantidad.type = "number";
        divCantidad.append(inputCantidad);

        // INPUT PRECIO DE COTIZACIÓN DEL VALOR
        const divCotizacion = document.createElement("div");
        divCotizacion.classList.add("form-group", "p-2");
        const labelCotizacion = document.createElement("label");
        labelCotizacion.textContent = "Precio de Cotización Actual:";
        divCotizacion.append(labelCotizacion);
        const inputCotizacion = document.createElement("input");
        inputCotizacion.setAttribute("id", "cotizacion");
        inputCotizacion.readOnly = true;
        divCotizacion.append(inputCotizacion);

        // COMISIÓN POR OPERACIÓN
        const divComision = document.createElement("div");
        divComision.classList.add("form-group");
        const labelComision = document.createElement("label");
        labelComision.textContent = "Comisión por Operación:";
        divComision.append(labelComision);
        const inputComision = document.createElement("input");
        inputComision.setAttribute("id", "comisionCompra");
        inputComision.readOnly = true;
        divComision.append(inputComision);

        // TOTAL OPERACIÓN
        const divTotal = document.createElement("div");
        divTotal.classList.add("form-group", "p-2");
        const labelTotal = document.createElement("label");
        labelTotal.textContent = "Total operación:";
        divTotal.append(labelTotal);
        const inputTotal = document.createElement("input");
        inputTotal.setAttribute("id", "totalCompra");
        inputTotal.readOnly = true;
        divTotal.append(inputTotal);

        // BOTON
        const divButton = document.createElement("button");
        divButton.textContent = "Ejecutar Compra";
        divButton.classList.add("form-group", "p-2");       // PASAR PARAMETROS PARA AÑADIR A LA BASE DE DATOS
        divButton.addEventListener("click", e => { e.preventDefault(); operacionCompra(this.cliente) });
        divButton.setAttribute("id", "ejecutarCompra");

        form.append(divValor, divTicker, divCantidad, divMercado, divCotizacion, divComision, divTotal, divButton);
        contenedorCompra.append(form);
        document.body.append(contenedorCompra);

        // INICIO FOOTER

        const FooterPagina = document.createElement("footer");
        FooterPagina.classList.add("Footer");
        const TextoFooter = document.createElement("p");
        TextoFooter.textContent = "Copyright @EcoValue Gestión de Carteras - 2021 - Todos los derechos Reservados";
        TextoFooter.classList.add("TextoFooter");
        FooterPagina.append(TextoFooter);
        
        contenedorCompra.append(FooterPagina);
        
        // FIN FOOTER

    }


}

const mostrarOperaciones = () => {
    const valor = document.querySelector("#selectValor").value;
    const ticker = buscaTicker(valor);

    let fecha = new Date();
    let añoActual = fecha.getFullYear();
    let mesActual = fecha.getMonth() + 1;
    let ayer = fecha.getDate() - 1;

    if (ayer < 10) {
        ayer = ("0" + (fecha.getDate() - 1)).slice(-2);
    }

    const fechaActual = añoActual + "-" + mesActual + "-" + ayer;

    //const fechaActualProvisional = "2021-11-23"; // Cuando el dia de ayer la bolsa no abrió

    let url = `https://api.polygon.io/v1/open-close/${ticker[0]}/${fechaActual}?adjusted=true&apiKey=eCI2fh7a4zipFKtXBhTX5zDvr_6V3whw`;
    fetch(`${url}`)
        .then((response) => response.json())
        .then(data => obtenerDatos(data));

    function obtenerDatos(data) {

        let precioCotizacion = document.querySelector("#cotizacion").value = data.close;

        let comision = document.querySelector("#comisionCompra").value = 10;

        document.querySelector("#tickerValor").value = ticker[0];

        document.querySelector("#mercado").value = ticker[1];

        document.querySelector("#cantidadCompra").addEventListener("focusout", () => {
            let cantCompra = document.querySelector("#cantidadCompra").value;
            let total = (cantCompra * precioCotizacion) + comision;
            document.querySelector("#totalCompra").value = total;
        });

    }

}

const operacionCompra = (cliente) => {
    const NombreValor = document.querySelector("#selectValor").value;
    

    getClientes().then((datosItems) => {
        let ValorExiste = false;
        let cartera = datosItems[cliente]["cartera"];

        // ITERABLE
        for (let pos in cartera) {
            if (pos == NombreValor) {
                ValorExiste = true;
            }
        }
        const tickerValor = document.querySelector("#tickerValor").value;
        const NValores = document.querySelector("#cantidadCompra").value;
        const mercado = document.querySelector("#mercado").value;
        const total = document.querySelector("#totalCompra").value;
        let precioMedio = total/NValores;


        if (ValorExiste == true) {

            let cantidadAnterior = datosItems[cliente]["cartera"][NombreValor]["Cantidad"];
            let cantidadActualizada = parseFloat(cantidadAnterior) + parseFloat(NValores);

            let totalAnterior =  datosItems[cliente]["cartera"][NombreValor]["Total"];
            let totalActualizado = (parseFloat(totalAnterior) + parseFloat(total)).toFixed(2);

            let PrecioMedioActualizado = (parseFloat(totalActualizado) / parseFloat(cantidadActualizada)).toFixed(2);

            let objetoCompra = {
                Cantidad: cantidadActualizada,
                Mercado: mercado,
                PrecioMedio: PrecioMedioActualizado,
                Ticker: tickerValor,
                Total: totalActualizado
            }

            addPosicion(cliente, NombreValor, objetoCompra);

        } else {

            let objetoCompra = {
                Cantidad: NValores,
                Mercado: mercado,
                PrecioMedio: precioMedio,
                Ticker: tickerValor,
                Total: total
            }

            addPosicion(cliente, NombreValor, objetoCompra);

        }

        setTimeout(() => {
             const carteraCli = new carteraCliente(cliente);
        }, 1000);

    });

}

const volverConsultaClientes = (cliente) => {
    const consultCli = new consultaCliente(cliente);
}

export default compraValor;