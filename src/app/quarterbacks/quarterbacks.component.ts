import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { Quarterback } from '../models/quarterback';
import { QuarterbackService } from '../services/quarterback.service';

@Component({
  selector: 'app-quarterbacks',
  templateUrl: './quarterbacks.component.html',
  styleUrls: ['./quarterbacks.component.scss']
})
export class QuarterbacksComponent implements OnInit {

  quarterbacks: Quarterback[] = [];
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource<Quarterback>(null);

  constructor(private quarterbackService: QuarterbackService) { }

  ngOnInit() {
    this.getQuarterbacks();
  }

  getQuarterbacks() {
    this.quarterbackService.getQuarterbacks()
      .subscribe(quarterbacks => (
        this.quarterbacks = quarterbacks)
        );
  }

}
