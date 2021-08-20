import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { TabGrCompService } from '../tab-gr-comp.service';
import { TabGrComp } from '../tab-gr-comp';

@Component({
  selector: 'app-update-tab-gr-comp',
  templateUrl: './update-tab-gr-comp.component.html',
  styleUrls: ['./update-tab-gr-comp.component.css']
})
export class UpdateTabGrCompComponent implements OnInit {

  cmpId: number;
  tabGrComp: TabGrComp;

  constructor(private route: ActivatedRoute,private router: Router,
    private tabGrCompService: TabGrCompService) { }

  ngOnInit() {
    this.tabGrComp = new TabGrComp();

    this.cmpId = this.route.snapshot.params['cmpId'];
    
    this.tabGrCompService.getTabGrComp(this.cmpId)
      .subscribe(data => {
        console.log(data)
        this.tabGrComp = data.data;
      }, error => console.log(error));
  }

  updateTabGrComp() {
    this.tabGrCompService.updateTabGrComp(this.tabGrComp)
      .subscribe(data => {
        console.log(data);
        this.tabGrComp = new TabGrComp();
        this.gotoList();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateTabGrComp();    
  }

  gotoList() {
    this.router.navigate(['tabGrComp/list']);
  }

}
