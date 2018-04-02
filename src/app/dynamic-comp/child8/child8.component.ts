import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child8',
  templateUrl: './child8.component.html',
  styleUrls: ['./child8.component.scss']
})
export class Child8Component implements OnInit {

  @Input()
  public title:string="默认的标题";

  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public triggerEvent():void{
    this.btnClick.emit("第一个子组件的点击事件...");
  }

}
