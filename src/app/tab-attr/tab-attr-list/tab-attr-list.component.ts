import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { TabAttrService } from "../tab-attr.service";
import { TabAttr } from "../tab-attr";

@Component({
  selector: "app-tabAttr-list",
  templateUrl: "./tab-attr-list.component.html",
  styleUrls: ["./tab-attr-list.component.css"],
})
export class TabAttrListComponent implements OnInit {
  tabAttrs: Observable<TabAttr[]>;
  constructor(private tabAttrService: TabAttrService, private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tabAttrService.getTabAttrsList().subscribe(
      (data) => {
        console.log(data);
        this.tabAttrs = data.data;
      },
      (error) => console.log(error)
    );
  }

  deleteTabAttr(attrNo: string) {
    if (confirm("Are you sure to delete [" + attrNo + "]")) {
      this.tabAttrService.deleteTabAttr(attrNo).subscribe(
        (data) => {
          console.log(data);
          this.reloadData();
        },
        (error) => console.log(error)
      );
    }
  }

  updateTabAttr(attrNo: string) {
    this.router.navigate(["tabAttr/update", attrNo]);
  }

  createTabAttr() {
    this.router.navigate(["tabAttr/add"]);
  }
}
