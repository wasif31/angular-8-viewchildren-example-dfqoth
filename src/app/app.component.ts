// import { Component, ViewChildren, AfterViewInit, QueryList } from '@angular/core';

// import { HelloComponent } from './hello.component';

// @Component({
//   selector: 'my-app',
//   templateUrl: './app.component.html',
//   styleUrls: [ './app.component.css' ]
// })
// export class AppComponent implements AfterViewInit {
//   name = 'Angular';
//   @ViewChildren(HelloComponent) hellos: QueryList<any>;

//   ngAfterViewInit() {

//      this.hellos.forEach(hello => console.log(hello));

//   }
// }
import {
  ViewChild,
  Component,
  ViewChildren,
  QueryList,
  AfterViewInit,
} from '@angular/core';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
})
export class AppComponent implements AfterViewInit {
  firstName;
  middleName;
  lastName;

  showFirstName = true;
  showMiddleName = true;
  showlastName = true;

  @ViewChildren(NgModel) modelRefList: QueryList<NgModel>;

  ngAfterViewInit() {
    this,
      this.modelRefList.changes.subscribe((data) => {
        console.log(data);
      });
  }

  show() {
    this.modelRefList.forEach((element) => {
      console.log(element);
      //console.log(element.value)
    });
  }
}
