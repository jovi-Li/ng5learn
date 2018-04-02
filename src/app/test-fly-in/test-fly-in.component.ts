import { Component, OnInit } from '@angular/core';
import { flyIn,rotateOut } from '../animations/fly-in';
import { trigger, transition, useAnimation } from '@angular/animations';

@Component({
  selector: 'test-fly-in',
  templateUrl: './test-fly-in.component.html',
  styleUrls: ['./test-fly-in.component.scss'],
  animations:[flyIn, trigger('rotateOut', [transition('* => *', useAnimation(rotateOut))])]
})
export class TestFlyInComponent implements OnInit {
  state:string;

  constructor() { }

  ngOnInit() {
  }

}
