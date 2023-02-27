import { Injectable } from '@angular/core';

//el decorador @Injectable se encarga de "injectar" el servicio 
//en los distintos componentes de la app
@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor() { }

  obtenerDatos() {
    console.log("El portfolio está funcionando!!");
  }
}
