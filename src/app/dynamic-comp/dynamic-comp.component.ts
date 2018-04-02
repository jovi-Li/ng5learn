import { Component, OnInit,ViewChild,ViewContainerRef,ComponentFactoryResolver,ComponentRef } from '@angular/core';
import { state } from '@angular/animations';
import {Child8Component} from "./child8/child8.component";

@Component({
  selector: 'dynamic-comp',
  templateUrl: './dynamic-comp.component.html',
  styleUrls: ['./dynamic-comp.component.scss']
})
export class DynamicCompComponent implements OnInit {

    //这里引用模板里面定义的dyncomp容器标签
    @ViewChild("dyncomp",{read:ViewContainerRef})
    dyncomp:ViewContainerRef;
  
    comp1:ComponentRef<Child8Component>;
    comp2:ComponentRef<Child8Component>;
  
    constructor(
      private resolver:ComponentFactoryResolver) {
  
    }
  
    ngOnInit() {
    }
  
    ngAfterContentInit(){
      console.log("动态创建组件的实例...");
      const childComp=this.resolver.resolveComponentFactory(Child8Component);
      this.comp1=this.dyncomp.createComponent(childComp); 
      // this.comp1.instance.title="父层设置的新标题";
      
      // this.comp1.instance.btnClick.subscribe((param)=>{
      //   console.log("--->"+param);
      // });
  
      //可以创建多个组件实例出来
      // let temp1=this.dyncomp.createComponent(childComp); 
      // temp1.instance.title="第2个动态子组件";
      // let temp2=this.dyncomp.createComponent(childComp); 
      // temp2.instance.title="第3个动态子组件";
      // let temp3=this.dyncomp.createComponent(childComp); 
      // temp3.instance.title="第4个动态子组件";
      // let temp4=this.dyncomp.createComponent(childComp); 
      // temp4.instance.title="第5个动态子组件";
      // let temp5=this.dyncomp.createComponent(childComp);
      // temp5.instance.title="第6个动态子组件"; 
      
      /**
       * createComponent方法可以调用很多次，会动态创建出多个组件实例
       * 方法有第二个参数，表示组件渲染的顺序
       */
      this.comp2=this.dyncomp.createComponent(childComp,0);
      this.comp2.instance.title="第二个子组件";
    }
  
    public destoryChild():void{
      this.comp1.destroy();
      this.comp2.destroy();
    }

}
