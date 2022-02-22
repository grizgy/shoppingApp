import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-quantity-section',
  templateUrl: './quantity-section.component.html',
  styleUrls: ['./quantity-section.component.css']
})
export class QuantitySectionComponent implements OnInit {

  inputNumber = 0;

  constructor() { }

  ngOnInit(): void {
  }


  add() {
    this.inputNumber = this.inputNumber + 1;
    console.log(this.inputNumber)
  }

  subtract() {
    if(this.inputNumber != 0) {
      this.inputNumber = this.inputNumber - 1;
      console.log(this.inputNumber)
    }
    
  }

}
