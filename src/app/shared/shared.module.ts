import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';



@NgModule({
  declarations: [
    ConfirmDialogComponent
  ],
  imports: [
    MatDialogModule,
    MatButtonModule,
    CommonModule
  ]
})
export class SharedModule { }
