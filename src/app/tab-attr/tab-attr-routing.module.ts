import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabAttrListComponent } from './tab-attr-list/tab-attr-list.component';
import { CreateTabAttrComponent } from './create-tab-attr/create-tab-attr.component';
import { UpdateTabAttrComponent } from './update-tab-attr/update-tab-attr.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabAttr', pathMatch: 'full' },
  { path: 'tabAttr/list', component: TabAttrListComponent },
  { path: 'tabAttr/add', component: CreateTabAttrComponent },
  { path: 'tabAttr/update/:attrNo', component: UpdateTabAttrComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabAttrRoutingModule { }
