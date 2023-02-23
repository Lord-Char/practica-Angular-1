import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreSerieComponent } from './sobre-serie.component';

describe('SobreSerieComponent', () => {
  let component: SobreSerieComponent;
  let fixture: ComponentFixture<SobreSerieComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreSerieComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SobreSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
