import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingApp';
  "text" : string = "";

  constructor(public routerApp: Router) { }

  ngOnInit(): void {
    }

    thisIsText(text : string) {
      console.log(text + " APPPP")
      this.text = text;
    }
}
