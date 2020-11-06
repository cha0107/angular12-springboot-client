import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateTabAttrComponent } from './create-tabAttr/create-tabAttr.component';
import { TabAttrListComponent } from './tabAttr-list/tabAttr-list.component';
import { HttpClientModule } from '@angular/common/http';
import { UpdateTabAttrComponent } from './update-tabAttr/update-tabAttr.component';
@NgModule({
  declarations: [
    AppComponent,
    CreateTabAttrComponent,
    TabAttrListComponent,
    UpdateTabAttrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
