// MODULOS
import {getClientes} from "../helpers/objetoClientes.js";
import consultaCliente from "./consultaCliente.js";
import ventaValor from "./ventaValor.js";

// CLASSES
class carteraCliente {

    constructor(cliente) {
        this.cliente = cliente;
        getClientes().then((datosItems) => { // Obtenemos la cartera
            this.cartera = datosItems[this.cliente]["cartera"];
            this.renderPagina(); 
        });
    }

    renderPagina() {

        console.log("Cartera del cliente: " + this.cliente);
        console.log("Composición cartera: " , this.cartera);
        
        document.body.innerHTML = "";
        const contenedorCartera = document.createElement("div");
        contenedorCartera.classList.add("container");

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
        contenedorCartera.append(EncabezadoPagina);

        // FOOTER PÁGINA

        const botonVolver = document.createElement("button");
        botonVolver.classList.add("botonVolver");
        botonVolver.textContent = "Volver Clientes";
        botonVolver.addEventListener("click", () => volverConsultaClientes(this.cliente));
        contenedorCartera.append(botonVolver);

        const h1 = document.createElement("h1");
        h1.textContent = "Posiciones en Cartera";
        h1.classList.add("tituloLista");
        contenedorCartera.append(h1);

        const table = document.createElement("table");
        table.classList.add("table");
        table.classList.add("table-hover");

        // ENCABEZADO DE LA TABLA

        const thead = document.createElement("thead");
        thead.classList.add("theadTablaCartera");
        const tr = document.createElement("tr");
        const th1 = document.createElement("th");
        th1.textContent = "Título";
        const th2 = document.createElement("th");
        th2.textContent = "Ticker";
        const th3 = document.createElement("th");
        th3.textContent = "Precio Medio";
        const th4 = document.createElement("th");
        th4.textContent = "Nº de Valores";
        const th5 = document.createElement("th");
        th5.textContent = "Cantidad Invertida €";
        const th6 = document.createElement("th");
        th6.textContent = "Acción";
        tr.append(th1, th2, th3, th4, th5, th6);
        thead.append(tr);
        table.append(thead);

        // CUERPO DE LA TABLA

        const tbody = document.createElement("tbody");
        tbody.classList.add("tbodyTablaCartera");

            // ITERABLE
            for (let posicion in this.cartera) {

                if (posicion != "Posicion") { // NO SE IMPRIME LA POSICIÓN = 0 (Esta posición existe para evitar el borrado en caso de no tener valore en cartera)
                    const tr = document.createElement("tr");
                    //Primera Columna
                    const td1 = document.createElement("td");
                    td1.textContent = posicion;
                    td1.style.fontWeight = "bold";
                    tr.append(td1);
    
                    //Segunda Columna
                    const td2 = document.createElement("td");
                    td2.textContent = this.cartera[posicion]["Ticker"];
                    tr.append(td2);
                    
                    //Tercera Columna
                    const td3 = document.createElement("td");
                    td3.textContent = this.cartera[posicion]["PrecioMedio"];
                    tr.append(td3);
                        
                    //Cuarta Columna    
                    const td4 = document.createElement("td");
                    td4.textContent = this.cartera[posicion]["Cantidad"];
                    tr.append(td4);
                        
                    //Quinta Columna
                    const td5 = document.createElement("td");
                    td5.textContent =this.cartera[posicion]["Total"];
                    tr.append(td5);
    
                    //Sexta Columna
                    const td6 = document.createElement("td");
                    const botonVenta = document.createElement("button");
                    botonVenta.classList.add("botonLista");
                    botonVenta.textContent = "Venta";
                    botonVenta.addEventListener("click", () => ventaPosicion(this.cliente, posicion));
                    td6.append(botonVenta);
                    tr.append(td6);
    
                    tbody.append(tr);
                }



            }

        table.append(tbody);

        contenedorCartera.append(table);

        // INICIO FOOTER

        const FooterPagina = document.createElement("footer");
        FooterPagina.classList.add("Footer");
        const TextoFooter = document.createElement("p");
        TextoFooter.textContent = "Copyright @EcoValue Gestión de Carteras - 2021 - Todos los derechos Reservados";
        TextoFooter.classList.add("TextoFooter");
        FooterPagina.append(TextoFooter);

        contenedorCartera.append(FooterPagina);

        // FIN FOOTER

        document.body.append(contenedorCartera);

    }

}

const ventaPosicion = (cliente, posicion) => {
    console.log(posicion);
    const venta = new ventaValor(cliente, posicion);
}

const volverConsultaClientes = (cliente) => {
    const consultCli = new consultaCliente(cliente);
}

export default carteraCliente;