import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import { Router, RouterEvent, NavigationStart, NavigationEnd, NavigationError, NavigationCancel } from '@angular/router';
import { faSync } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'system-engine-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  faSync = faSync;
  loading: boolean;
  constructor(private router: Router) {
    this.router.events.subscribe((routervent: RouterEvent) => {
      this.checkRouterEvent(routervent);
    });
  }

  ngOnInit() {
  }

  checkRouterEvent(routerEvent: RouterEvent) {
    if (routerEvent instanceof NavigationStart) {
      this.loading = true;
    }

    if (routerEvent instanceof NavigationEnd   ||
        routerEvent instanceof NavigationError ||
        routerEvent instanceof NavigationCancel ) {
      this.loading = false;
    }
  }

}
