

document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');
    var nome = document.querySelector('.nome');
    var primeiro = document.querySelector('.Primerio');
    var segundo = document.querySelector('.Segundo');

    formulario.addEventListener('submit', function (event) {
        if (!nome.value || !primeiro.value || !segundo.value) {
            alert("Por favor, preencha todos os campos.");
            event.preventDefault();
        } else {
            var primeiroValor = parseInt(primeiro.value);
            var segundoValor = parseInt(segundo.value);

            if (segundoValor > primeiroValor) {
                const formularioEnviado = document.querySelector(".confirmado");
                formularioEnviado.style.display = 'block';
                
                event.preventDefault(); 
            } else {
                var naoEnviado = document.querySelector(".nao-confirmado");
                naoEnviado.style.display = 'block';
                event.preventDefault(); 
            }
        }
    });
});




   


