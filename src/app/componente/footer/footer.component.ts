import { Component } from '@angular/core';
import { irArriba } from '../footer/footer.js'
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  title = 'Footer';
  ngOnInit() : void {
    irArriba();
  };
}



