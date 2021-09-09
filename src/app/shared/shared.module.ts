import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { HighlightDirective } from './directives/highlight.directive';
import { TaiwanDatePipe } from './pipes/taiwan-date.pipe';



@NgModule({
  declarations: [
    ConfirmDialogComponent,
    HighlightDirective,
    TaiwanDatePipe
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ],
  exports: [
    HighlightDirective,
    TaiwanDatePipe
  ],
})
export class SharedModule { }
