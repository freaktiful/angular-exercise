import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { AboutComponent } from './about.component';
import { InfoComponent } from './info/info.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [AboutComponent, InfoComponent],
  imports: [
    CommonModule,
    AboutRoutingModule,
    NgbModule
  ]
})
export class AboutModule { }
