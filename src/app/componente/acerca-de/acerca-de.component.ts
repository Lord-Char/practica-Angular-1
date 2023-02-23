import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'ngbd-accordion-static',
	standalone: true,
	imports: [NgbAccordionModule],
	templateUrl: './acerca-de.component.html',
})
export class NgbdAccordionStatic {}
@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent {

}
