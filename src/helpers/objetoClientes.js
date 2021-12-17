// FETCH Y API REST FIREBASE
function getUsuario() {
  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/acceso.json`;

  return fetch(`${url}`)
  .then((response) => response.json())
  .then((datosUsuario) => {
    return datosUsuario;
  });

}

function getClientes() {
  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/clientes.json`;

  return fetch(`${url}`)
  .then((response) => response.json())
  .then((datosItems) => {
    return datosItems;
  });
  
}

function delCliente(cliente) {
  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/clientes/${cliente}.json`;

  fetch(`${url}`, {
    method: "delete",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: {},
  });
  
}

function getCartera(cliente) {
  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/clientes/${cliente}/cartera.json`;

  return fetch(`${url}`)
  .then((response) => response.json())
  .then((cartera) => {
    return cartera;
  })
}

function addPosicion(cliente, NombreValor, objetoCompra) {
  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/clientes/${cliente}/cartera/${NombreValor}.json`;

  fetch(`${url}`, {
    method: "put",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(objetoCompra),   
  });

}

function delPosicion(cliente, posicion) {
  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/clientes/${cliente}/cartera/${posicion}.json`;

  fetch(`${url}`, {
    method: "delete",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: {},
  });

}

function reducirValores(cliente, posicion, cantRestante) {
  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/clientes/${cliente}/cartera/${posicion}/Cantidad.json`;

  fetch(`${url}`, {
    method: "put",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(cantRestante),
  });

}

function reducirTotal(cliente, posicion, nuevoTotal) {
  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/clientes/${cliente}/cartera/${posicion}/Total.json`;

  fetch(`${url}`, {
    method: "put",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(nuevoTotal),
  });

}

function anyadirCliente(nuevoCliente) {

  const clienteNuevo = {
    Name: nuevoCliente,
    cartera: {
      Posicion: 0
    }
  }

  const url = `https://proyectofrontend-1b27a-default-rtdb.firebaseio.com/clientes.json`;

  fetch(`${url}`, {
    method: "post",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(clienteNuevo),
  });
}


export {getUsuario, getClientes, getCartera, addPosicion, delPosicion, reducirValores, reducirTotal, anyadirCliente, delCliente};