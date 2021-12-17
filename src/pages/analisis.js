// MODULOS
import {getClientes} from "../helpers/objetoClientes.js";
import listaClientes from "./listaClientes.js";

    // CLASSES
    class analisis {

        constructor() {
            this.renderPagina();
        };
        
        renderPagina() {
            document.body.innerHTML = "";
            const contenedorAnalisis = document.createElement("div");
            contenedorAnalisis.classList.add("container", "mt-5");

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
            contenedorAnalisis.append(EncabezadoPagina);

            // FIN ENCABEZADO PÁGINA

            const boton = document.createElement("button");
            boton.classList.add("botonVolver");
            boton.textContent = "Volver Clientes";
            boton.addEventListener("click", ()=> volverClientes());
            contenedorAnalisis.append(boton);

            const titulo = document.createElement("h1");
            titulo.textContent = "Ejemplo de Análisis: Empresa 3M Corp.";
            contenedorAnalisis.append(titulo);

            // API
            obtenerFundamentales().then((info) => {
                let balance_sheet = info["results"][0]["financials"]["balance_sheet"];

                const h3 = document.createElement("h3");
                h3.textContent = "BALANCE DE SITUACIÓN";
                contenedorAnalisis.append(h3);

                const ul1 = document.createElement("ul");
                ul1.classList.add("list-group", "list-group-flush", "rounded", "border", "border-warning");
                contenedorAnalisis.append(ul1);
                const li1 = document.createElement("li");
                li1.classList.add("list-group-item", "bg-dark", "text-warning");
                li1.textContent = "Total Activo: " + balance_sheet["assets"]["value"] + " mill $ - Todo lo que tiene la empresa";
                ul1.append(li1);
                const li2 = document.createElement("li");
                li2.classList.add("list-group-item", "bg-dark", "text-warning");
                li2.textContent = "Patrimonio Neto: " + balance_sheet["equity"]["value"] + " mill $ - Es la resta entre Activos y Pasivos";
                ul1.append(li2);
                const li3 = document.createElement("li");
                li3.classList.add("list-group-item", "bg-dark", "text-warning");
                li3.textContent = "Pasivo: " + balance_sheet["liabilities"]["value"] + " mill $ - Lo que debe la empresa";
                ul1.append(li3);
                const li4 = document.createElement("li");
                li4.classList.add("list-group-item", "bg-dark", "text-warning");
                li4.textContent = "Activo No Corriente: " + balance_sheet["noncurrent_assets"]["value"] + " mill $ - Bienes en propiedad de la empresa por más de un año";
                ul1.append(li4);
                const li5 = document.createElement("li");
                li5.classList.add("list-group-item", "bg-dark", "text-warning");
                li5.textContent = "Activo Corriente: " + balance_sheet["current_assets"]["value"] + " mill $ - Bienes en propiedad de la empresa por menos de un año";
                ul1.append(li5);
                const li6 = document.createElement("li");
                li6.classList.add("list-group-item", "bg-dark", "text-warning");
                li6.textContent = "Pasivo No Corriente: " + balance_sheet["noncurrent_liabilities"]["value"] + " mill $ - Deudas y obligaciones de la empresa superiores a un año de duración";
                ul1.append(li6);
                const li7 = document.createElement("li");
                li7.classList.add("list-group-item", "bg-dark", "text-warning");
                li7.textContent = "Pasivo Corriente: " + balance_sheet["current_liabilities"]["value"] + " mill $ - Deudas y obligaciones de la empresa superiores a menos año de duración";
                ul1.append(li7);
                const li8 = document.createElement("li");
                li8.classList.add("list-group-item", "bg-dark", "text-warning");
                li8.textContent = "Ratio Endeudamiento: " + (balance_sheet["liabilities"]["value"] / (balance_sheet["equity"]["value"] + balance_sheet["liabilities"]["value"])).toFixed(2) + " - Por encima de 0,5 o 0,6 exceso de deuda, por debajo muy buena situación y entre esos valores situación optima";
                ul1.append(li8);
                const li9 = document.createElement("li");
                li9.classList.add("list-group-item", "bg-dark", "text-warning");
                li9.textContent = "Ratio de Calidad de la Deuda: " + ( balance_sheet["current_liabilities"]["value"] / balance_sheet["liabilities"]["value"]).toFixed(2) * 100 + " % - Ratio de Calidad de la Deuda: Cuanto menor sea el pocentaje mejor será la calidad de la deuda (más deuda a l/p que a c/p)";
                ul1.append(li9);
                const li10 = document.createElement("li");
                li10.classList.add("list-group-item", "bg-dark", "text-warning");
                li10.textContent = "Ratio de liquidez: " + (balance_sheet["current_assets"]["value"] / balance_sheet["current_liabilities"]["value"]).toFixed(2) + " - Ratio de liquidez: Entre 1 y 2, lo ideal por encima de 1,5";
                ul1.append(li10);
    
                const divExplicaciones = document.createElement("div");
                divExplicaciones.classList.add("mt-3");
                contenedorAnalisis.append(divExplicaciones);

                const tituloDivExplicaciones = document.createElement("h3");
                tituloDivExplicaciones.textContent = "Ejemplo de análisis de balance: ";
                divExplicaciones.append(tituloDivExplicaciones);

                const pExplicacion = document.createElement("p");
                pExplicacion.textContent = "3M cuenta con un apalancamiento (deuda) bastante elevada, pese a que la mayoria de deuda se situa en un horizonte temporal a largo plazo es algo que debemos controlar y vigilar como inversores. Su liquidez nos indica que toda la deuda a largo plazo que tiene la ha destinado a crecer organicamente a lo largo de los años, por lo que si obvervamos podemos ver una empresa con sólido balnce y una directiva centrada en el largo plazo.";
                pExplicacion.classList.add("text-white", "bg-dark", "rounded", "border", "border-warning", "p-1");
                divExplicaciones.append(pExplicacion);

                const clasificacion = document.createElement("h3");
                clasificacion.classList.add("m-1");
                clasificacion.textContent = "Clasificación a criterio propio:";
                divExplicaciones.append(clasificacion);

                const decisionFinal = document.createElement("h5");
                decisionFinal.setAttribute("id", "decision");
                decisionFinal.classList.add("text-warning");
                decisionFinal.textContent = "Blue-Chip"
                divExplicaciones.append(decisionFinal);

                // DESTRUCTURING
                const criteriosValoracion = ["Madura-Declive", "Blue-Chip", "Crecimiento", "Bagger", "Chicharro"];
                const [a, b, c, d, e] = criteriosValoracion;
                const opinionEmpresa = document.querySelector("#decision").textContent;
                const val = document.createElement("h6");
                val.classList.add("text-white", "bg-dark", "rounded", "border", "border-warning", "p-1");
                switch (opinionEmpresa) {
                    case a:
                        val.textContent = "Inversión descartada, este tipo de empresa no aporta valor.";
                        break;
                    case b:
                        val.textContent = "Podemos seguir investigandola, aun tiene años de aumento de valor.";
                        break;
                    case c:
                        val.textContent = "Investigancion inmediata, es el tipo de empresa que más puede despegar a futuro.";
                        break;
                    case d:
                        val.textContent = "Investigancion con prudencia, puede aportar más valor que ninguna otra pero tambien puede acabar en nada.";
                        break;
                    case e:
                        val.textContent = "Descartarla inmediatamente, empresa con serios problemas en su negocio y finanzas.";
                        break;                
                    default:
                        break;
                }
                divExplicaciones.append(val);

            });

            document.body.append(contenedorAnalisis);

        }

    }

    // FUNCIÓN ASYNC AWAIT
    // API CON RESPUESTA JSON
    async function obtenerFundamentales() {
        let response = await fetch(
            `https://api.polygon.io/vX/reference/financials?ticker=MMM&period_of_report_date=2020-12-31&timeframe=annual&apiKey=eCI2fh7a4zipFKtXBhTX5zDvr_6V3whw`
        );
            let data = await response.json();
            return data;
    }

    // FUNCIÓN
    function volverClientes() {
        getClientes().then( (datosItems) => {
            const listCli = new listaClientes(datosItems);
        });
    }

    // const obtenerDatos = () => {
    //     obtenerFundamentales().then((info) => {
    //         let balance_sheet = info["results"][0]["financials"]["balance_sheet"];
    //         mostrarDatosBalance(balance_sheet);

    //         // let income_statement = info["results"][0]["financials"]["income_statement"];
    //         // mostrarDatosPG(income_statement);

    //         // let cash_flow_statement = info["results"][0]["financials"]["cash_flow_statement"];
    //         // mostrarDatosCF(cash_flow_statement);

    //         // let ROCE =  (income_statement["operating_income_loss"]["value"] / (balance_sheet["assets"]["value"] - balance_sheet["current_liabilities"]["value"])) * 100;
    //         // console.log("ROCE: " + ROCE.toFixed(2) + " %");
    //     });
    // }

    // const mostrarDatosBalance = (balance_sheet) => {

        

    //     const divContenedor = document.createElement("div");
    //     divContenedor.classList.add("container");

    //     document.querySelector("#cuerpoAnalisis").append(divContenedor);

    //     const titulo = document.createElement("h2");
    //     titulo.textContent = "BALANCE DE SITUACIÓN";
    //     divContenedor.append(titulo);

    //     const ul1 = document.createElement("ul");
    //     ul1.classList.add("list-group", "list-group-flush");
    //     divContenedor.append(ul1);
    //     const li1 = document.createElement("li");
    //     li1.classList.add("list-group-item");
    //     li1.textContent = "Total Activo: " + balance_sheet["assets"]["value"] + " mill $";
    //     ul1.append(li1);
    //     const li2 = document.createElement("li");
    //     li1.classList.add("list-group-item");
    //     li2.textContent = "Patrimonio Neto: " + balance_sheet["equity"]["value"] + " mill $";
    //     ul1.append(li2);
    //     const li3 = document.createElement("li");
    //     li3.classList.add("list-group-item");
    //     li3.textContent = "Pasivo: " + balance_sheet["liabilities"]["value"] + " mill $";
    //     ul1.append(li3);
    //     const li4 = document.createElement("li");
    //     li4.classList.add("list-group-item");
    //     li4.textContent = "Activo No Corriente: " + balance_sheet["noncurrent_assets"]["value"] + " mill $";
    //     ul1.append(li4);
    //     const li5 = document.createElement("li");
    //     li5.classList.add("list-group-item");
    //     li5.textContent = "Activo Corriente: " + balance_sheet["current_assets"]["value"] + " mill $";
    //     ul1.append(li5);
    //     const li6 = document.createElement("li");
    //     li6.classList.add("list-group-item");
    //     li6.textContent = "Pasivo No Corriente: " + balance_sheet["noncurrent_liabilities"]["value"] + " mill $";
    //     ul1.append(li6);
    //     const li7 = document.createElement("li");
    //     li7.classList.add("list-group-item");
    //     li7.textContent = "Pasivo Corriente: " + balance_sheet["current_liabilities"]["value"] + " mill $";
    //     ul1.append(li7);
    //     const li8 = document.createElement("li");
    //     li8.classList.add("list-group-item");
    //     li8.textContent = "Ratio Endeudamiento: " + (balance_sheet["liabilities"]["value"] / (balance_sheet["equity"]["value"] + balance_sheet["liabilities"]["value"])).toFixed(2);
    //     ul1.append(li8);
    //     const li9 = document.createElement("li");
    //     li9.classList.add("list-group-item");
    //     li9.textContent = "Ratio de Calidad de la Deuda: " + ( balance_sheet["current_liabilities"]["value"] / balance_sheet["liabilities"]["value"]).toFixed(2) * 100 + " %";
    //     ul1.append(li9);
    //     const li10 = document.createElement("li");
    //     li10.classList.add("list-group-item");
    //     li10.textContent = "Ratio de liquidez: " + (balance_sheet["current_assets"]["value"] / balance_sheet["current_liabilities"]["value"]).toFixed(2);
    //     ul1.append(li10);

    //     console.log("Ratio Endeudamiento: Por encima de 0,5 o 0,6 exceso de deuda, por debajo muy buena situación y entre esos valores situación optima");
    //     console.log("Ratio de Calidad de la Deuda: Cuanto menor sea el pocentaje mejor será la calidad de la deuda (más deuda a l/p que a c/p)");
    //     console.log("Ratio de liquidez: Entre 1 y 2, lo ideal por encima de 1,5");

    // }

    // const mostrarDatosPG = (income_statement) => {
    //     console.log("CUENTA DE RESULTADOS");
    //     console.log("Total Ventas: " + income_statement["revenues"]["value"]);
    //     console.log("Coste de Ventas: " + income_statement["cost_of_revenue"]["value"]);
    //     console.log("Beneficio Bruto: " + income_statement["gross_profit"]["value"]);
    //     console.log("----------------------------------------------------");
    //     console.log("Costes Operativos: " + income_statement["costs_and_expenses"]["value"]);
    //     console.log("Beneficio Operativo (EBIT): " + income_statement["operating_income_loss"]["value"]);
    //     console.log("----------------------------------------------------");
    //     console.log("Beneficio/Perdida no operativos: " + income_statement["nonoperating_income_loss"]["value"]);
    //     console.log("----------------------------------------------------");
    //     console.log("Beneficio antes de Impuestos: " + income_statement["income_loss_from_continuing_operations_before_tax"]["value"]);
    //     console.log("Provisión Impuesto sobre beneficios: " + income_statement["income_tax_expense_benefit"]["value"]);
    //     console.log("Ingresos del grupo consolidado: " + income_statement["income_loss_from_continuing_operations_after_tax"]["value"]);
    //     console.log("Beneficio (pérdida) neta de subsidiarias no consolidadas: " + income_statement["income_loss_from_equity_method_investments"]["value"]);
    //     console.log("Beneficio Neto: " + income_statement["net_income_loss"]["value"]);
    //     console.log("Beneficio (pérdida) neta atribuible a la participación minoritaria:" + income_statement["net_income_loss_attributable_to_noncontrolling_interest"]["value"]);
    //     console.log("Beneficio Neto attribuido al grupo: " + income_statement["net_income_loss_available_to_common_stockholders_basic"]["value"]);
    //     console.log("Beneficios por accion diluidos: " + income_statement["diluted_earnings_per_share"]["value"]);
    //     console.log("Nº Acciones en circulación (incluidas stock options): " + (income_statement["net_income_loss_available_to_common_stockholders_basic"]["value"] / income_statement["diluted_earnings_per_share"]["value"]));

    // }

    // const mostrarDatosCF = (cash_flow_statement) => {
    //     console.log("CASH FLOW");
    //     console.log("Flujo de Caja Operativo:" + cash_flow_statement["net_cash_flow_from_operating_activities_continuing"]["value"]);
    //     console.log("Flujo de Caja Inversiones:" + cash_flow_statement["net_cash_flow_from_investing_activities_continuing"]["value"]);
    //     console.log("Flujo de Caja Financiacion: " + cash_flow_statement["net_cash_flow_from_financing_activities_continuing"]["value"]);
    // }

export default analisis;