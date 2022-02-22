import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private count : number = 0;
  
  text: string = "Cart (" + this.count  + ")" ;

  constructor() { }

  ngOnInit(): void {
  }

}
