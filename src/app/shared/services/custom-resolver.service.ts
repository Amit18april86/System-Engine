import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';
import { Product } from 'src/app/core/classes/product';

@Injectable({
  providedIn: 'root'
})
export class CustomResolverService implements Resolve<any> {

  constructor(private sharedService: SharedService) { }

  resolve(): Observable<Product[]> {
    return this.sharedService.getProducts();
  }
}
