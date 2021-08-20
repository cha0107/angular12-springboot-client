import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { TabGrCompService } from "../tab-gr-comp.service";
import { TabGrComp } from "../tab-gr-comp";


@Component({
  selector: 'app-tab-gr-comp-list',
  templateUrl: './tab-gr-comp-list.component.html',
  styleUrls: ['./tab-gr-comp-list.component.css']
})
export class TabGrCompListComponent implements OnInit {
  tabGrComps: Observable<TabGrComp[]>;
  constructor(private tabGrCompService: TabGrCompService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tabGrCompService.getTabGrCompsList().subscribe(
      (data) => {
        console.log(data);
        this.tabGrComps = data.data;
      },
      (error) => console.log(error)
    );
  }

  deleteTabGrComp(cmpId: number) {
    if (confirm("Are you sure to delete [" + cmpId + "]")) {
      this.tabGrCompService.deleteTabGrComp(cmpId).subscribe(
        (data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error)
      );
    }
  }

  updateTabGrComp(cmpId: number) {
    this.router.navigate(["tabGrComp/update", cmpId]);
  }

  createTabGrComp() {
    this.router.navigate(["tabGrComp/add"]);
  }

}
