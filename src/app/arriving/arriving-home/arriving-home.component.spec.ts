import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivingHomeComponent } from './arriving-home.component';

describe('ArrivingHomeComponent', () => {
  let component: ArrivingHomeComponent;
  let fixture: ComponentFixture<ArrivingHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivingHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivingHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
