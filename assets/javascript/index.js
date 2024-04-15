/*
cabe destacar que se noto que las funciones tenian problema al estar en modo responsive, por ello para hacer las respectivas pruebas se tiene que estar sin el responsive de prueba
*/
/*se agregan los tools para que salga una pequeño anuncio que haga referencia a donde se va*/
const tooltipTriggerList = document.querySelectorAll(
  '[data-bs-toggle="tooltip"]'
);
const tooltipList = [...tooltipTriggerList].map(
  (tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl)
);

/*se agrega evento al darle click en el boton de enviar correo para que emerga una ventana, se uso un simple alert*/
$("#enviarCorreo").click(function () {
  alert("  “El correo fue enviado correctamente");
});

/*cuando se le de doble click a un titulo con h4  la letra cambiara el color rojo*/

$("h4").on("dblclick", function () {
  $(this).css("color", "red");
});

/*cuando se le de click al titulo de las cartas desapareceran todos los parrafos*/
$(".card-toggle").click(function () {
  // Seleccionar todos los contenidos de las tarjetas y alternar su visibilidad
  $(".card-toggle-content").toggle();
});
