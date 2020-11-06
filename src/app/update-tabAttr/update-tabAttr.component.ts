import { Component, OnInit } from '@angular/core';
import { TabAttr } from '../tabAttr';
import { ActivatedRoute, Router } from '@angular/router';
import { TabAttrService } from '../tabAttr.service';

@Component({
  selector: 'app-update-tabAttr',
  templateUrl: './update-tabAttr.component.html',
  styleUrls: ['./update-tabAttr.component.css']
})
export class UpdateTabAttrComponent implements OnInit {

  attrNo: string;
  tabAttr: TabAttr;

  constructor(private route: ActivatedRoute,private router: Router,
    private tabAttrService: TabAttrService) { }

  ngOnInit() {
    this.tabAttr = new TabAttr();

    this.attrNo = this.route.snapshot.params['attrNo'];
    
    this.tabAttrService.getTabAttr(this.attrNo)
      .subscribe(data => {
        console.log(data)
        this.tabAttr = data.data;
      }, error => console.log(error));
  }

  updateTabAttr() {
    this.tabAttrService.updateTabAttr(this.tabAttr)
      .subscribe(data => {
        console.log(data);
        this.tabAttr = new TabAttr();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateTabAttr();    
  }

  gotoList() {
    this.router.navigate(['/tabAttrs']);
  }
}
