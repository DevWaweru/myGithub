import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Search } from '../git-class/search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchRequest = new Search("");

  @Output() getName = new EventEmitter<Search>();
  
  lookFor(data){
    // console.log(data.value.search);
    this.getName.emit(data.value.search);
    data.reset();
  }
  constructor() { }

  ngOnInit() {
  }

}
