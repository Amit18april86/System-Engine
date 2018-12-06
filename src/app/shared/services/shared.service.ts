import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Resolve } from '@angular/router';
import { Product } from 'src/app/core/classes/product';

@Injectable({
  providedIn: 'root'
})
export class SharedService{
  behaviourData = new BehaviorSubject('Initial Value');
  subscriberData = this.behaviourData.asObservable();
  constructor( private http: HttpClient) {
  }

  changeBehavioudData(newData: string) {
    this.behaviourData.next(newData);
  }

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('http://localhost:3000/products');
  }

}
