import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedteacherComponent } from './groupedteacher.component';

describe('GroupedteacherComponent', () => {
  let component: GroupedteacherComponent;
  let fixture: ComponentFixture<GroupedteacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupedteacherComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedteacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
