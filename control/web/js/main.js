//alert("Hola mundo");
let adelante=document.getElementById("adelante");
let atras=document.getElementById("atras");
let izquierda=document.getElementById("izquierda");
let derecha=document.getElementById("derecha");
let detener=document.getElementById("detener");
let mensaje=document.getElementById("mensaje");


// Función para llamar a la API

function CallApi(estatus)
{
    // Hacer una petición para un usuario con ID especifico
    axios.get('http://13.41.195.143/iot-car-control/back-end/apis/setRegistro.php?valorEstatus='+estatus)
    .then(function (response) {
    // manejar respuesta exitosa
    console.log(response);
    mensaje.innerHTML="Respuesta: " + response.data;
    })
    .catch(function (error) {
    // manejar error
    console.log(error);
    })
    .finally(function () {
    // siempre sera executado
    });
}




if (adelante) {
  adelante.addEventListener("click", function () {
      CallApi('F');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}

if (atras) {
  atras.addEventListener("click", function () {
      CallApi('B');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}

if (izquierda) {
  izquierda.addEventListener("click", function () {
      CallApi('L');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}

if (derecha) {
  derecha.addEventListener("click", function () {
      CallApi('R');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}

if (detener) {
  detener.addEventListener("click", function () {
      CallApi('S');
  });
} else {
  console.error("El elemento con el ID 'adelante' no existe.");
}
