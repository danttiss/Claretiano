const formulario = document.getElementById("formulario-contato");

formulario.addEventListener("submit", function(event) {

    event.preventDefault();

    alert("Mensagem enviada com sucesso!");

    formulario.reset();

});