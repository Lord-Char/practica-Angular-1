import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProduccionYLanzamientoComponent } from './produccion-y-lanzamiento.component';

describe('ProduccionYLanzamientoComponent', () => {
  let component: ProduccionYLanzamientoComponent;
  let fixture: ComponentFixture<ProduccionYLanzamientoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProduccionYLanzamientoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProduccionYLanzamientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
