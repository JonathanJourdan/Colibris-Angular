import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreaSerieComponent } from './crea-serie.component';

describe('CreaSerieComponent', () => {
  let component: CreaSerieComponent;
  let fixture: ComponentFixture<CreaSerieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreaSerieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreaSerieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
