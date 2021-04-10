import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Todo {
  completed: boolean;
  title: string;
  id?: number;
}

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {
  todos: Todo[] = [];

  constructor(private  http: HttpClient) {
  }

  ngOnInit() {
    this.http.get('http://localhost:8079/api/employees').subscribe(todos => {
      console.log('response', todos);
    });
  }

}
