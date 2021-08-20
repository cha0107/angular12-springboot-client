import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabGrCompListComponent } from './tab-gr-comp-list/tab-gr-comp-list.component';
import { CreateTabGrCompComponent } from './create-tab-gr-comp/create-tab-gr-comp.component';
import { UpdateTabGrCompComponent } from './update-tab-gr-comp/update-tab-gr-comp.component';

const routes: Routes = [
  { path: '', redirectTo: 'tabGrComp', pathMatch: 'full' },
  { path: 'tabGrComp/list', component: TabGrCompListComponent },
  { path: 'tabGrComp/add', component: CreateTabGrCompComponent },
  { path: 'tabGrComp/update/:cmpId', component: UpdateTabGrCompComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabGrCompRoutingModule { }
