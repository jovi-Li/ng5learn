import { Component, OnInit } from '@angular/core';
import{EventBusService} from '../service/event-bus.service';

@Component({
  selector: 'child-2',
  templateUrl: './child-2.component.html',
  styleUrls: ['./child-2.component.scss']
})
export class Child2Component implements OnInit {

  public events:Array<any>=[];

  constructor(public eBS:EventBusService) { }

  ngOnInit() {
    this.eBS.eventBus.subscribe((value)=>
    {
      this.events.push(value+"-"+new Date());
      //死循环
      //this.eBS.eventBus.next("第2个组件触发的事件");
    }
  );
  }

}
