exports.indicarScroll = function() {
const { window } = require("rxjs");

addEventListener('DOMContentLoaded', () => {
    const barra__indicador = document.querySelector (".indicador__scroll");

    const indicarScroll = () => {
        if (obtener__pixeles__inicio() > 50){
            boton__ir__arriba.className = 'mostrar';
        } else {
            boton__ir__arriba.className = 'ocultar';
        }
        let alto = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let avance__scroll = (obtener__pixeles__inicio() / alto) * 100;
        barra__indicador.style.width = '$(avance__scroll)%';
    };
    
    window.addEventListener('scroll', indicarScroll);
})
}