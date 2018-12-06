import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from '../../../shared/services/shared.service';
import { Product } from 'src/app/core/classes/product';

@Component({
  selector: 'system-engine-lazy',
  templateUrl: './lazy.component.html',
  styleUrls: ['./lazy.component.scss']
})
export class LazyComponent implements OnInit {

  products: Product[];
  constructor(private sharedService: SharedService) { }

  ngOnInit() {
    this.sharedService.getProducts().subscribe( res => {
      this.products = res;
    });
  }

}
