import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivingHistoryComponent } from './arriving-history.component';

describe('ArrivingHistoryComponent', () => {
  let component: ArrivingHistoryComponent;
  let fixture: ComponentFixture<ArrivingHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivingHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivingHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
