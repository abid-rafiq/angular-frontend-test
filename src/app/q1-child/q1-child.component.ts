import { Component, OnInit, SimpleChanges, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-q1-child',
  templateUrl: './q1-child.component.html',
  styleUrls: ['./q1-child.component.sass']
})
export class Q1ChildComponent implements OnChanges {
  @Input() appData: boolean;

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes)
  }

}
