import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'shoppingApp';

  constructor(public routerApp: Router) { }

  ngOnInit(): void {
    }

    headerIsVisible() : boolean {
      if(this.routerApp.url == '/login' || this.routerApp.url ==  '/register') {
        return false;
      }
      return true;
    }

}
