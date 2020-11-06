import { Observable } from "rxjs";
import { TabAttrService } from "../tabAttr.service";
import { TabAttr } from "../tabAttr";
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: "app-tabAttr-list",
  templateUrl: "./tabAttr-list.component.html",
  styleUrls: ["./tabAttr-list.component.css"]
})
export class TabAttrListComponent implements OnInit {
  tabAttrs: Observable<TabAttr[]>;
  constructor(private tabAttrService: TabAttrService,
    private router: Router) {}

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.tabAttrService.getTabAttrsList()
    .subscribe(
      data => {
        console.log(data);
        this.tabAttrs = data.data;
      },
      error => console.log(error));
  }

  deleteTabAttr(attrNo: string) {
    this.tabAttrService.deleteTabAttr(attrNo)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  updateTabAttr(attrNo: string){
    this.router.navigate(['update', attrNo]);
  }
}
