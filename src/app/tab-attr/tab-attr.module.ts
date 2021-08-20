import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TabAttrRoutingModule } from './tab-attr-routing.module';
import { CreateTabAttrComponent } from './create-tab-attr/create-tab-attr.component';
import { TabAttrListComponent } from './tab-attr-list/tab-attr-list.component';
import { UpdateTabAttrComponent } from './update-tab-attr/update-tab-attr.component';


@NgModule({
  declarations: [
    CreateTabAttrComponent,
    TabAttrListComponent,
    UpdateTabAttrComponent
  ],
  imports: [
    CommonModule,
    TabAttrRoutingModule,
    FormsModule
  ]
})
export class TabAttrModule { }
