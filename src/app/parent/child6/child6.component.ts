import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child6',
  templateUrl: './child6.component.html',
  styleUrls: ['./child6.component.scss']
})
export class Child6Component implements OnInit {

  public time:string=new Date().toLocaleString();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("1号子组件的ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    console.log("1号子组件的ngAfterViewChecked...");
  }

  public setTime(time:string):void{
    this.time=time;
  }

}
