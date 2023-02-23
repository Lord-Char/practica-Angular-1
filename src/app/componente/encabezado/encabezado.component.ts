import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'ngbd-accordion-static',
	standalone: true,
	imports: [NgbAccordionModule],
	templateUrl: './encabezado.component.html',
})
export class NgbdAccordionStatic {}

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent {

}
