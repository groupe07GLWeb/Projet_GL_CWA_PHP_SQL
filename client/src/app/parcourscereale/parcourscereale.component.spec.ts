import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParcourscerealeComponent } from './parcourscereale.component';

describe('ParcourscerealeComponent', () => {
  let component: ParcourscerealeComponent;
  let fixture: ComponentFixture<ParcourscerealeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParcourscerealeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParcourscerealeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
