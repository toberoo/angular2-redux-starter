import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <h1> {{message}} </h1>
  `
})
export class AppComponent {
  message = "Hey"
  constructor() {}

  public ngOnInit() {

  }

}