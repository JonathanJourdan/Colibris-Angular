import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaUserComponent } from './crea-user.component';

describe('CreaUserComponent', () => {
  let component: CreaUserComponent;
  let fixture: ComponentFixture<CreaUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
