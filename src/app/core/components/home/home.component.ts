import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'system-engine-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  personList: Observable<Person[]>;
  data: Person[];
  constructor(private http: HttpClient) { }

  ngOnInit() {

  }

}
