import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-quantity-section',
  templateUrl: './quantity-section.component.html',
  styleUrls: ['./quantity-section.component.css']
})
export class QuantitySectionComponent implements OnInit {

  @Input() inputNumber : number = 1;
  @Output() eventEmmit = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }


  add() {
    this.eventEmmit.emit(this.inputNumber = this.inputNumber + 1);
  }

  subtract() {
    if(this.inputNumber != 1) {
      this.eventEmmit.emit(this.inputNumber = this.inputNumber - 1);
    }
  }

}
