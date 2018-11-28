import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  behaviourData = new BehaviorSubject('Initial Value');
  subscriberData = this.behaviourData.asObservable();
  constructor() {
  }

  changeBehavioudData(newData: string) {
    this.behaviourData.next(newData);
  }
}
