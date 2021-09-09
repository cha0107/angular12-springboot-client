import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core'

import { TabGrCompService } from "../tab-gr-comp.service";
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-tab-gr-comp-list',
  templateUrl: './tab-gr-comp-list.component.html',
  styleUrls: ['./tab-gr-comp-list.component.css']
})
export class TabGrCompListComponent implements OnInit {
  // tabGrComps: Observable<TabGrComp[]>;
  totalCount;
  tabGrCompDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['cmpId', 'cmpName', 'groupId', 'cmpAddr', 'zip', 'areaCode'
    , 'cmpTel', 'upDt', 'userId', 'jobClass', 'email', 'faxNum', 'cmpNum'];
    columnsToDisplay: string[] = ['cmpId', 'cmpName', 'groupId', 'cmpAddr', 'zip', 'areaCode'
    , 'cmpTel', 'upDt', 'userId', 'jobClass', 'email', 'faxNum', 'cmpNum', 'management'];
  // columnsToDisplay: string[] = this.displayedColumns.slice().push('management');;
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;

  constructor(private tabGrCompService: TabGrCompService, private router: Router, private dialog: MatDialog) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tabGrCompService.getTabGrCompsList().subscribe(
      (data) => {
        console.log(data);
        this.totalCount = data.data.length;
        this.tabGrCompDataSource.data = data.data;
        this.tabGrCompDataSource.paginator = this.paginator;
        this.tabGrCompDataSource.sort = this.sortTable;
      },
      (error) => console.log(error)
    );
  }

  deleteTabGrComp(cmpId: number) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete TabGrComp',
        message: "Are you sure to delete CmpId [ " + cmpId + " ] ?"
      }
    });
    
    confirmDialog.afterClosed().subscribe(result => {
      if(result){
        this.tabGrCompService.deleteTabGrComp(cmpId).subscribe(
          (data) => {
            console.log(data);
            this.reloadData();
          },
          (error) => console.log(error)
        );
      }
    });
  }

  updateTabGrComp(cmpId: number) {
    this.router.navigate(["tabGrComp/update", cmpId]);
  }

  createTabGrComp() {
    this.router.navigate(["tabGrComp/add"]);
  }

}
