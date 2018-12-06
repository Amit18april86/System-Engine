import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {SharedService} from './services/shared.service';
import { CustomResolverService } from './services/custom-resolver.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [SharedService, CustomResolverService]
})
export class SharedModule { }
