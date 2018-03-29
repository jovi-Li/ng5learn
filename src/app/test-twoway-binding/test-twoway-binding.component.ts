import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'test-twoway-binding',
  templateUrl: './test-twoway-binding.component.html',
  styleUrls: ['./test-twoway-binding.component.scss']
})
export class TestTwowayBindingComponent implements OnInit {

  public fontSizePx:number=14;

  constructor() { }

  ngOnInit() {
  }

}
