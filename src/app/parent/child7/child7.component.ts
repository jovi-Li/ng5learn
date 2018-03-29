import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'child7',
  templateUrl: './child7.component.html',
  styleUrls: ['./child7.component.scss']
})
export class Child7Component implements OnInit {

  public time:string=new Date().toLocaleString();

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    console.log("2号子组件的ngAfterViewInit...");
  }

  ngAfterViewChecked() {
    console.log("2号子组件的ngAfterViewChecked...");
  }

  public setTime(time:string):void{
    this.time=time;
  }

}
