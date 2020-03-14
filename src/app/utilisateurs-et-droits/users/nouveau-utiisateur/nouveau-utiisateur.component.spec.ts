import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NouveauUtiisateurComponent } from './nouveau-utiisateur.component';

describe('NouveauUtiisateurComponent', () => {
  let component: NouveauUtiisateurComponent;
  let fixture: ComponentFixture<NouveauUtiisateurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NouveauUtiisateurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NouveauUtiisateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
