import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestValueBindComponent } from './test-value-bind/test-value-bind.component';
import { TestInterpolationComponent } from './test-interpolation/test-interpolation.component';
import { TestTempRefVarComponent } from './test-temp-ref-var/test-temp-ref-var.component';
import { TestEventBindingComponent } from './test-event-binding/test-event-binding.component';
import { TestTwowayBindingComponent } from './test-twoway-binding/test-twoway-binding.component';
import { FontResizerComponent } from './test-twoway-binding/font-resizer/font-resizer.component';
import { TestNgModelComponent } from './test-ng-model/test-ng-model.component';
import { TestPipeComponent } from './test-pipe/test-pipe.component';
import { TestSafeNavComponent } from './test-safe-nav/test-safe-nav.component';
import { BrotherComponent } from './brother/brother.component';
import { Child1Component } from './brother/child-1/child-1.component';
import { Child2Component } from './brother/child-2/child-2.component';
import { EventBusService } from './brother/service/event-bus.service';
import { ParentAndChildComponent } from './parent-and-child/parent-and-child.component';
import { ChildComponent } from './parent-and-child/child/child.component';
import { LocalStorageComponent } from './local-storage/local-storage.component';
import { LocalChild1Component } from './local-storage/local-child1/local-child1.component';
import { LocalChild2Component } from './local-storage/local-child2/local-child2.component';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';

@NgModule({
  declarations: [
    AppComponent,
    TestValueBindComponent,
    TestInterpolationComponent,
    TestTempRefVarComponent,
    TestEventBindingComponent,
    TestTwowayBindingComponent,
    FontResizerComponent,
    TestNgModelComponent,
    TestPipeComponent,
    TestSafeNavComponent,
    BrotherComponent,
    Child1Component,
    Child2Component,
    ParentAndChildComponent,
    ChildComponent,
    LocalStorageComponent,
    LocalChild1Component,
    LocalChild2Component,
    LifeCycleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule 
  ],
  providers: [EventBusService],
  bootstrap: [AppComponent]
})
export class AppModule { }
