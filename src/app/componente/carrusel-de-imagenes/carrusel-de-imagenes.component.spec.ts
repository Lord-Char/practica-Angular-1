import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarruselDeImagenesComponent } from './carrusel-de-imagenes.component';

describe('CarruselDeImagenesComponent', () => {
  let component: CarruselDeImagenesComponent;
  let fixture: ComponentFixture<CarruselDeImagenesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarruselDeImagenesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CarruselDeImagenesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
