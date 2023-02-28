exports.irArriba = function() { //esta linea llama la funcion dentro de Angular
     
addEventListener('DOMContentLoaded', () => {
    const boton__ir__arriba = document.querySelector('#ir__arriba__boton');
    
    const obtener__pixeles__inicio = () => document.documentElement.scrollTop || document.body.scrollTop;

    /*La animacion va muy lenta, por eso dejo el scroll en (0,0)*/
        const irArriba = () => {
            if (obtener__pixeles__inicio () > 0){
            //requestAnimationFrame (irArriba)
            //scrollTo (0, obtener__pixeles__inicio() - (obtener__pixeles__inicio() / 20))
            scrollTo (0,0);
            }
        }  

    boton__ir__arriba.addEventListener('click', irArriba);
});
}