addEventListener('DOMContentLoaded', () => {
    const boton__ir__arriba = document.querySelector ('#ir__arriba__boton');
    
    const obtener__pixeles__inicio = () => document.documentElement.scrollTop || document.body.scrollTop;

    const irArriba = () => {
        if (obtener__pixeles__inicio () > 0){
            requestAnimationFrame (irArriba)
            scrollTo (0, obtener__pixeles__inicio() - (obtener__pixeles__inicio() / 20))
        }
    }

    boton__ir__arriba.addEventListener('click', irArriba);
})