import { CreateTabAttrComponent } from './create-tabAttr/create-tabAttr.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabAttrListComponent } from './tabAttr-list/tabAttr-list.component';
import { UpdateTabAttrComponent } from './update-tabAttr/update-tabAttr.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabAttr', pathMatch: 'full' },
  { path: 'tabAttrs', component: TabAttrListComponent },
  { path: 'add', component: CreateTabAttrComponent },
  { path: 'update/:attrNo', component: UpdateTabAttrComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
