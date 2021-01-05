import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFicheEntretienComponent } from './add-fiche-entretien.component';

describe('AddFicheEntretienComponent', () => {
  let component: AddFicheEntretienComponent;
  let fixture: ComponentFixture<AddFicheEntretienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddFicheEntretienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFicheEntretienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
