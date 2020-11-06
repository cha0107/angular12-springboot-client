import { TabAttrService } from '../tabAttr.service';
import { TabAttr } from '../tabAttr';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-tabAttr',
  templateUrl: './create-tabAttr.component.html',
  styleUrls: ['./create-tabAttr.component.css']
})
export class CreateTabAttrComponent implements OnInit {

  tabAttr: TabAttr = new TabAttr();
  submitted = false;

  constructor(private tabAttrService: TabAttrService,
    private router: Router) { }

  ngOnInit() {
  }

  newTabAttr(): void {
    this.submitted = false;
    this.tabAttr = new TabAttr();
  }

  save() {
    this.tabAttrService
    .createTabAttr(this.tabAttr).subscribe(data => {
      console.log(data)
      this.tabAttr = new TabAttr();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['/tabAttrs']);
  }
}
