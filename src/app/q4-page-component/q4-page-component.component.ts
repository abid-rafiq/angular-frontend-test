import { Component, OnInit, Input } from '@angular/core';
import { switchMap } from 'rxjs/operators';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-q4-page-component',
  templateUrl: './q4-page-component.component.html',
  styleUrls: ['./q4-page-component.component.sass']
})
export class Q4PageComponentComponent implements OnInit {
  @Input() data: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    // this.data = this.route.snapshot.paramMap.get('data');
    this.route.paramMap.subscribe( paramMap => {
        this.data = paramMap.get('data');
        console.log(this.data);
      }
    );
  }

}
