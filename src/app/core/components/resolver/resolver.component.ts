import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../../classes/product';

@Component({
  selector: 'system-engine-resolver',
  templateUrl: './resolver.component.html',
  styleUrls: ['./resolver.component.scss']
})
export class ResolverComponent implements OnInit {

  productList: Product[];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.productList = this.route.snapshot.data.productData;
  }

}
