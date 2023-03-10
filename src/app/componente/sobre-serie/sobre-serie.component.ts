import { Component } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-sobre-serie',
  templateUrl: './sobre-serie.component.html',
  styleUrls: ['./sobre-serie.component.css']
})
export class SobreSerieComponent {

  miPortfolio:any;

  constructor(private datosPortfolio:PortfolioService) {}
    ngOnInit(): void {
      this.datosPortfolio.obtenerDatos().subscribe(data => {
        console.log(data);
        
        this.miPortfolio = data; //este es el enlace del databinding
      })
    }
  
}
