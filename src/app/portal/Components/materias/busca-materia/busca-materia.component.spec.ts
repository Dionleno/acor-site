import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaMateriaComponent } from './busca-materia.component';

describe('BuscaMateriaComponent', () => {
  let component: BuscaMateriaComponent;
  let fixture: ComponentFixture<BuscaMateriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscaMateriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaMateriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
