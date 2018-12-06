import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoreRoutingModule } from './core-routing.module';
import {SharedModule} from '../shared/shared.module';
import { HomeComponent } from './components/home/home.component';
import { CardComponent } from './components/card/card.component';
import { ResolverComponent } from './components/resolver/resolver.component';


@NgModule({
  declarations: [HomeComponent, CardComponent, ResolverComponent],
  exports: [],
  imports: [
    CommonModule,
    SharedModule,
    CoreRoutingModule
  ]
})
export class CoreModule { }
