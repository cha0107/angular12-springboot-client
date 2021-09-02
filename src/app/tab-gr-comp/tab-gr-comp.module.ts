import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TabGrCompRoutingModule } from './tab-gr-comp-routing.module';
import { CreateTabGrCompComponent } from './create-tab-gr-comp/create-tab-gr-comp.component';
import { UpdateTabGrCompComponent } from './update-tab-gr-comp/update-tab-gr-comp.component';
import { TabGrCompListComponent } from './tab-gr-comp-list/tab-gr-comp-list.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule} from '@angular/material/input';

@NgModule({
  declarations: [
    CreateTabGrCompComponent,
    UpdateTabGrCompComponent,
    TabGrCompListComponent
  ],
  imports: [
    CommonModule,
    TabGrCompRoutingModule,
    FormsModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  exports: [
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule
  ],
})
export class TabGrCompModule { }
