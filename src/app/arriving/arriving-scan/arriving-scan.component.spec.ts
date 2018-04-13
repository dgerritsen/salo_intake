import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivingScanComponent } from './arriving-scan.component';

describe('ArrivingScanComponent', () => {
  let component: ArrivingScanComponent;
  let fixture: ComponentFixture<ArrivingScanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivingScanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivingScanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
