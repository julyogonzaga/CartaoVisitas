const botaoMensagem = document.querySelector('#botaoMensagem')
const botaoOcultar = document.getElementById('botaoOcultar')
const mensagem = document.querySelector('#mensagem')
const nome = document.querySelector('#nome')

botaoMensagem.addEventListener("click", function () {
    mensagem.textContent = `Prazer em conhecer você, ${nome.textContent}`
});

botaoOcultar.addEventListener('click', function () {
    mensagem.textContent = ""
});