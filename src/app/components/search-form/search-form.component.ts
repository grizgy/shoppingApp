import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from 'src/app/product';


@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {

  products : Product[] = [];
  @Input()"term": string = "";
  @Output() emmitSearchResult = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.term)
    this.emmitSearchResult.emit(this.term);
  }

  onKey(event: any) {
    this.term = event.target.value;
    console.log(this.term)
    this.emmitSearchResult.emit(this.term);
  }

}
