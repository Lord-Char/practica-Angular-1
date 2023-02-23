import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SinopsisComponent } from './sinopsis.component';

describe('SinopsisComponent', () => {
  let component: SinopsisComponent;
  let fixture: ComponentFixture<SinopsisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SinopsisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SinopsisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
