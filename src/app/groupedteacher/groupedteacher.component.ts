import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Teacher } from '../teacher';
import { TeacherService } from '../teacher.service';

@Component({
  selector: 'app-groupedteacher',
  templateUrl: './groupedteacher.component.html',
  styleUrls: ['./groupedteacher.component.scss']
})
export class GroupedteacherComponent implements OnInit {
  @Input() id: number;
  teacher: Teacher;
  constructor(private teacherService: TeacherService) { }

  ngOnInit(): void {
    this.teacher = this.teacherService.getGroupedTeacherById(this.id);
  }

}
