import { TabGrComp } from './tab-gr-comp/tab-gr-comp';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { TabAttrModule } from './tab-attr/tab-attr.module';
import { TabGrCompModule } from './tab-gr-comp/tab-gr-comp.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    TabAttrModule, //含有路由設定的子功能模組一定要放在 AppRoutingModule 的上面
    TabGrCompModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
