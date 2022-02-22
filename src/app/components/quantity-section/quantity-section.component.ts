import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-quantity-section',
  templateUrl: './quantity-section.component.html',
  styleUrls: ['./quantity-section.component.css']
})
export class QuantitySectionComponent implements OnInit {

  inputNumber : number = 1;
  @Output() eventEmmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  add() {
    this.inputNumber = this.inputNumber + 1;
  }

  subtract() {
    if(this.inputNumber != 0) {
      this.inputNumber = this.inputNumber - 1;
    }
  }

    getQuantity() {
      console.log(this.inputNumber);
      this.eventEmmit.emit(this.inputNumber);
    }

}
