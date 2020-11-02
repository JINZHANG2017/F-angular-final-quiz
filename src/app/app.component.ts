import { Component } from '@angular/core';
import { Teacher } from './teacher';
import { TeacherService } from './teacher.service';

// TODO GTB-1: * 需求没有实现
// TODO GTB-3: * 模块缺失，app无法启动
// TODO GTB-3: * angular基础理解不到位，无法按预期逻辑渲染
// TODO GTB-4: * 没有小步提交，comment不清晰
// TODO GTB-4: * lint错误

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-final-quiz';
  groupedteachers:  Teacher[];W // TODO GTB-4: - 提交错误代码
  constructor(teacherService: TeacherService) {
    this.groupedteachers = teacherService.getGroupedTeacher(); // TODO GTB-3: - Observable需要订阅，不能直接赋值
  }
}
