import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

export interface Vacancy {
  conditions: string
  contacts: string
  descriptions: string
  id?: number
  requirements: string
  vacancy: string
}

@Component({
  selector: 'app-vacancies',
  templateUrl: './vacancies.component.html',
  styleUrls: ['./vacancies.component.scss']
})
export class VacanciesComponent implements OnInit {

  vacancies: Vacancy[] = []

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get<Vacancy[]>('http://localhost:8079/api/vacancies').subscribe(vacancies=>{
      console.log('response',vacancies);
      this.vacancies = vacancies
    })
  }

}
