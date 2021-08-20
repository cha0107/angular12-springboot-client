import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TabGrCompRoutingModule } from './tab-gr-comp-routing.module';
import { CreateTabGrCompComponent } from './create-tab-gr-comp/create-tab-gr-comp.component';
import { UpdateTabGrCompComponent } from './update-tab-gr-comp/update-tab-gr-comp.component';
import { TabGrCompListComponent } from './tab-gr-comp-list/tab-gr-comp-list.component';


@NgModule({
  declarations: [
    CreateTabGrCompComponent,
    UpdateTabGrCompComponent,
    TabGrCompListComponent
  ],
  imports: [
    CommonModule,
    TabGrCompRoutingModule,
    FormsModule
  ]
})
export class TabGrCompModule { }
