import { Component, OnInit ,AfterViewInit} from '@angular/core';
import {EventBusService} from '../service/event-bus.service';

@Component({
  selector: 'child-1',
  templateUrl: './child-1.component.html',
  styleUrls: ['./child-1.component.scss']
})
export class Child1Component implements OnInit {
 public response:Array<any>=[];

  constructor(public eventBusService:EventBusService) {
    this.eventBusService.eventBus.next("第first个组件触发的事件");
   }

  ngOnInit() {
    this.eventBusService.eventBus.next("第1个组件触发的事件");
  }

  public triggerEventBus():void{
    this.eventBusService.eventBus.next("第一个组件触发的事件");
  }

  ngAfterViewInit() {
    //this.childComponent.childFn();
    this.eventBusService.eventBus.next("第@1个组件触发的事件");
  }
}
