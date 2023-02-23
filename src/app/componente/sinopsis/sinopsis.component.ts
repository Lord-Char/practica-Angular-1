import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'ngbd-accordion-static',
	standalone: true,
	imports: [NgbAccordionModule],
	templateUrl: './sinopsis.component.html',
})
export class NgbdAccordionStatic {}
@Component({
  selector: 'app-sinopsis',
  templateUrl: './sinopsis.component.html',
  styleUrls: ['./sinopsis.component.css']
})
export class SinopsisComponent {

}
