import { Component, OnInit ,ViewChild} from '@angular/core';
import {Child6Component} from './child6/child6.component';

@Component({
  selector: 'parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnInit {
  @ViewChild("child11")
  child6:Child6Component

  // @ViewChild("child22")
  // child66:Child6Component

  constructor() { }

  ngOnInit() {
    setInterval(
      ()=>{
        this.child6.setTime(new Date().toLocaleString())
      }
    ,1000);
  }

  ngAfterViewInit() {
    console.log("父组件的ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    console.log("父组件的ngAfterViewChecked...");
  }
}
