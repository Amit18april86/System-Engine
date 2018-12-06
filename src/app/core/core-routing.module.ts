import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CustomResolverService } from '../shared/services/custom-resolver.service';
import { ResolverComponent } from './components/resolver/resolver.component';

const routes: Routes = [{
  path:'home',
  component: HomeComponent
}, {
  path: 'lazy',
  loadChildren: '../../app/lazy/lazy.module#LazyModule'
}, {
  path: 'products',
  component: ResolverComponent,
  resolve: { productData: CustomResolverService }
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
