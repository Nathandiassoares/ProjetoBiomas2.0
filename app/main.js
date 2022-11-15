const boxImagenOnca = document.querySelector('[data-test01]')
const iniciaJogo = document.querySelector('.subtitulo')


iniciaJogo.addEventListener('click', elemento => {
    boxImagenOnca.setAttribute('src','app/onca.png')
})