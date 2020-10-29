import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UngroupedteacherComponent } from './ungroupedteacher.component';

describe('UngroupedteacherComponent', () => {
  let component: UngroupedteacherComponent;
  let fixture: ComponentFixture<UngroupedteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UngroupedteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UngroupedteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
