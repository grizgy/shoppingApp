import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-section',
  templateUrl: './quantity-section.component.html',
  styleUrls: ['./quantity-section.component.css']
})
export class QuantitySectionComponent implements OnInit {

  @Input() "inputNumber" : number;
  @Output() eventEmmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
    console.log(this.inputNumber)
    this.eventEmmit.emit(this.inputNumber);
  }


  add() {
    console.log(this.inputNumber + 1)
    this.eventEmmit.emit(this.inputNumber = this.inputNumber + 1);
  }

  subtract() {
    if(this.inputNumber != 1) {
      console.log(this.inputNumber - 1)
      this.eventEmmit.emit(this.inputNumber = this.inputNumber - 1);
    }
  }

}
