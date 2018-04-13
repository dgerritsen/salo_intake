import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrivingSavedComponent } from './arriving-saved.component';

describe('ArrivingSavedComponent', () => {
  let component: ArrivingSavedComponent;
  let fixture: ComponentFixture<ArrivingSavedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArrivingSavedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArrivingSavedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
