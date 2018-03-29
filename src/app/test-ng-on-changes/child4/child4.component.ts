import { Component, OnInit,Input,SimpleChanges } from '@angular/core';

@Component({
  selector: 'child4',
  templateUrl: './child4.component.html',
  styleUrls: ['./child4.component.scss']
})
export class Child4Component implements OnInit {

  @Input()
  public userName: string = "";
  @Input()
  public userObj: any = {};

  public age: number = 18;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("Child1 ngChanges..."+new Date());
  }

  ngDoCheck():void{
    console.log("Child1 ngDoCheck..."+new Date());
  }
  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log("Child1 ngAfterViewChecked..."+new Date());
  }
}
