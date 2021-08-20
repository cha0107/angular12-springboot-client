import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { TabGrCompService } from '../tab-gr-comp.service';
import { TabGrComp } from '../tab-gr-comp';

@Component({
  selector: 'app-create-tab-gr-comp',
  templateUrl: './create-tab-gr-comp.component.html',
  styleUrls: ['./create-tab-gr-comp.component.css']
})
export class CreateTabGrCompComponent implements OnInit {


  tabGrComp: TabGrComp = new TabGrComp();
  submitted = false;

  constructor(private tabGrCompService: TabGrCompService,
    private router: Router) { }

  ngOnInit() {
  }

  newTabGrComp(): void {
    this.submitted = false;
    this.tabGrComp = new TabGrComp();
  }

  save() {
    this.tabGrCompService
    .createTabGrComp(this.tabGrComp).subscribe(data => {
      console.log(data)
      this.tabGrComp = new TabGrComp();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['tabGrComp/list']);
  }

}
