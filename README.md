# Proyecto-JavaScript

La aplicación inicia en index.html donde de inicio hay un formulario que recibe los datos del gestor patrimonial, el cual 
es el único que va a acceder a la aplicación para gestionar las carteras de sus clientes, el usuario y contraseña es verificado en index.js.
(Se verifica a través de la importación de la función getUsuario() de objetoClientes.js).

Una vez logueado correctamente, se abre la página listaClientes.js en esta, el gestor patrimonial tiene ante sí una tabla de los diferentes 
clientes que gestiona el identificador de cada uno, el nombre del cliente, y además tiene dos opciones disponibles para cada uno de los clientes. 
(Se muestran a través de la importación de la función getUsuario() de objetoClientes.js).

La primera opción es la propia gestión de la cartera de cada cliente (Operar) y la segunda es dar de baja el cliente (Eliminar Cliente).
Debajo de la tabla dispone también de dos botones, uno de ellos para crear nuevos clientes, y el otro una guía para aprender a analizar los fundamentales de una empresa.

En caso de pulsar el botón “Operar”, pasaremos a la página consultaCliente.js en esta tendremos tres botones disponibles, el primero en la parte superior 
izquierda para volver a listaClientes.js y los dos de la parte central para la compra de valores (Comprar Valores) y para la visualización de la cartera (Posiciones en Cartera).

Si el gestor Patrimonial escoge “Comprar Valores”, se pasará a la página compraValor.js, en esta también contará con la opción de volver a consultaCliente.js y dos campos 
en los cuales en uno deberá elegir el valor a comprar, y otro con la cantidad de compra, el resto de campos se rellenarán automáticamente. Cuando se ejecute la compra se 
mostrarán los valores en cartera en la página carteraCliente.js. (Se añade la compra a través de la función addPosicion() de objetoClientes.js y el ticker del valor es obtenido 
por buscaTicker.js el cual obtiene el ticker de cada valor).

En el botón “Posiciones en Cartera” aparecerá la página carteraCliente.js donde tendrá la opción de volver a consultaCliente.js y se podrá observar la cartera completa del 
cliente, y además cada posición en cartera dispone de un botón (venta) para ejecutar sobre dicha posición una venta total o parcial. ventaValor.js en esta tendremos un botón 
para volver a carteraCliente.js y un campo donde sólo tendremos que indicar el número de acciones a vender, una vez realizada la operación se volverá automáticamente a 
carteraCliente.js. (Se ejecuta la venta a través de las funciones delPosicion() o reducirValores() y reducirTotal() objetoClientes.js y el ticker del valor es obtenido por 
buscaTicker.js el cual obtiene el ticker de cada valor).

La opción “Crear Nuevo Cliente”, nos permitirá dar de alta un nuevo cliente en la página crearNuevoCliente.js además de la posibilidad de volver atrás.
(Se crea a través de la función anyadirCliente() de objetoClientes.js).

Por último, contamos con la opción de abrir un pequeño resumen, guía de análisis de valores bursátiles con la opción de “Analizar valores”, esta nos llevará a un ejemplo de 
análisis sobre el balance de una empresa en la página analisis.js.

ERROR DIAS NO APERTURA DE BOLSA
Cuando el día anterior la bolsa no abrió, por fin de semana o dia festivo, la aplicación proporciona un error ya que no proporciona datos para el dia solicitado. 
Se sustituye por un dia provisional para su funcionamiento

