import { Component } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-final-quiz';
  groupedteachers:  Teacher[];W
  constructor(teacherService: TeacherService) {
    this.groupedteachers = teacherService.getGroupedTeacher();
  }
}
