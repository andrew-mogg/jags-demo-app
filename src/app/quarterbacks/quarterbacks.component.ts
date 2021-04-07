import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';

import { IQuarterback } from '../models/IQuarterback';
import { QuarterbackService } from '../services/quarterback.service';

@Component({
  selector: 'app-quarterbacks',
  templateUrl: './quarterbacks.component.html',
  styleUrls: ['./quarterbacks.component.scss']
})
export class QuarterbacksComponent implements OnInit {

  quarterbacks: IQuarterback[] = [];
  displayedColumns: string[] = ['position', 'name'];
  dataSource = new MatTableDataSource<IQuarterback>(null);

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
