import { Component, OnInit, Input } from '@angular/core';
import { THROW_IF_NOT_FOUND } from '@angular/core/src/di/injector';

@Component({
  selector: 'system-engine-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  todaysDate: string;
  daysRemaining: number;
  @Input() person: Person;
  constructor() { }

  ngOnInit() {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const dt2 = new Date();
    const dt1 = new Date('12/31/2018');
    const timeDiff = dt1.getTime() - dt2.getTime();
    this.daysRemaining = (-1) *
    Math.floor((Date.UTC(dt2.getFullYear(), dt2.getMonth(),
     dt2.getDate()) - Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) ) / (1000 * 60 * 60 * 24));
    this.todaysDate = dt2.toLocaleDateString('hi-IN', options);

  }

}
