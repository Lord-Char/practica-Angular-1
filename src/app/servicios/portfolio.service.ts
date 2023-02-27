import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

//el decorador @Injectable se encarga de "injectar" el servicio 
//en los distintos componentes de la app
@Injectable({
  providedIn: 'root'
})

export class PortfolioService {

  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any> { 
    return this.http.get ('.assets/data/data.json');
    //console.log("El portfolio está funcionando!!");
  }
}
