import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedstudentComponent } from './groupedstudent.component';

describe('GroupedstudentComponent', () => {
  let component: GroupedstudentComponent;
  let fixture: ComponentFixture<GroupedstudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedstudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedstudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
