import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TituloSerieComponent } from './titulo-serie.component';

describe('TituloSerieComponent', () => {
  let component: TituloSerieComponent;
  let fixture: ComponentFixture<TituloSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TituloSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TituloSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
