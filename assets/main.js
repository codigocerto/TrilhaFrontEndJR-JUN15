// Função para adicionar ou remover a classe scroll-effect no body
window.addEventListener('scroll', function() {
    const body = document.body;

    if (window.scrollY > 50) { // Adiciona efeito após rolar 50px
        body.classList.add('scroll-effect');
    } else {
        body.classList.remove('scroll-effect');
    }
});
