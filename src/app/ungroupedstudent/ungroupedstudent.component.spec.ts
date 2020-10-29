import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UngroupedstudentComponent } from './ungroupedstudent.component';

describe('UngroupedstudentComponent', () => {
  let component: UngroupedstudentComponent;
  let fixture: ComponentFixture<UngroupedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UngroupedstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UngroupedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
