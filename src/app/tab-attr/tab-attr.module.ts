import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TabAttrRoutingModule } from './tab-attr-routing.module';
import { CreateTabAttrComponent } from './create-tab-attr/create-tab-attr.component';
import { TabAttrListComponent } from './tab-attr-list/tab-attr-list.component';
import { UpdateTabAttrComponent } from './update-tab-attr/update-tab-attr.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    CreateTabAttrComponent,
    TabAttrListComponent,
    UpdateTabAttrComponent
  ],
  imports: [
    CommonModule,
    TabAttrRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    SharedModule
  ],
  exports: [

  ],
})
export class TabAttrModule { }
