import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionReqComponent } from './gestion-req.component';

describe('GestionReqComponent', () => {
  let component: GestionReqComponent;
  let fixture: ComponentFixture<GestionReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GestionReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
