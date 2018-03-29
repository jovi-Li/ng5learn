import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-temp-ref-var',
  templateUrl: './test-temp-ref-var.component.html',
  styleUrls: ['./test-temp-ref-var.component.scss']
})
export class TestTempRefVarComponent implements OnInit {

  public heroInput:string="";
  constructor() { }

  ngOnInit() {
  }
  public sayHello(name:string):void{
    this.heroInput=name;
    alert(name);
  }
}
