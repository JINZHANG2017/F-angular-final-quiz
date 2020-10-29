import { Injectable } from '@angular/core';
import { Teacher } from './teacher';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
export class TeacherService{

    constructor(private http: HttpClient) {
    }
    getGroupedTeacherById(id: number): Teacher {
        return{
            id,
            name: 'Teacher '+id
        };
    }
    getGroupedTeacher(): Observable<Teacher[]>{
        return this.http.get<Teacher[]>('');
    }
}