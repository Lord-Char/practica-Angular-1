import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
@Component({
	selector: 'ngbd-accordion-static',
	standalone: true,
	imports: [NgbAccordionModule],
	templateUrl: './personajes.component.html',
})
export class NgbdAccordionStatic {}
@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent {

}
