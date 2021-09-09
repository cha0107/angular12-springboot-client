import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ViewChild } from '@angular/core'

import { TabAttrService } from "../tab-attr.service";
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: "app-tabAttr-list",
  templateUrl: "./tab-attr-list.component.html",
  styleUrls: ["./tab-attr-list.component.css"],
})
export class TabAttrListComponent implements OnInit {
  totalCount;
  color = "";
  tabAttrDataSource = new MatTableDataSource<any>();
  displayedColumns: string[] = ['attrNo', 'attrName'];
  columnsToDisplay: string[] = ['attrNo', 'attrName', 'management'];
  // columnsToDisplay: string[] = this.displayedColumns.slice().push('management');
  @ViewChild('paginator') paginator: MatPaginator;
  @ViewChild('sortTable') sortTable: MatSort;

  constructor(private tabAttrService: TabAttrService, private router: Router, private dialog: MatDialog) {
  }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tabAttrService.getTabAttrsList().subscribe(
      (data) => {
        console.log(data);
        this.totalCount = data.data.length;
        this.tabAttrDataSource.data = data.data;
        this.tabAttrDataSource.paginator = this.paginator;
        this.tabAttrDataSource.sort = this.sortTable;
      },
      (error) => console.log(error)
    );
  }

  deleteTabAttr(attrNo: string) {
    const confirmDialog = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Confirm Delete TabAttr',
        message: "Are you sure to delete AttrNo [ " + attrNo + " ] ?"
      }
    });
    
    confirmDialog.afterClosed().subscribe(result => {
      if(result){
        this.tabAttrService.deleteTabAttr(attrNo).subscribe(
          (data) => {
            console.log(data);
            this.reloadData();
          },
          (error) => console.log(error)
        );
      }
    });
  }

  updateTabAttr(attrNo: string) {
    this.router.navigate(["tabAttr/update", attrNo]);
  }

  createTabAttr() {
    this.router.navigate(["tabAttr/add"]);
  }
}
