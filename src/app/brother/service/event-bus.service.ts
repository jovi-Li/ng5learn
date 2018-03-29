import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class EventBusService {

  public eventBus:Subject<string> = new Subject<string>();

  constructor() { }

}
