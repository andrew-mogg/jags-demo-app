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

  selectedQb: number = 0;
  quarterbacks: IQuarterback[] = [];
  activeQb: IQuarterback;
  displayedColumns: string[] = ['week', 'opponentName', 'gameDate', 'yardsPerAttempt', 'completionPercentage', 'completions', 'attempts', 'passingYards', 'passingTds', 'interceptions', 'sacks', 'rushYards', 'rushTds'];
  dataSource = new MatTableDataSource<IQuarterback>(null);

  constructor(private quarterbackService: QuarterbackService) { }

  ngOnInit() {
    this.getQuarterbacks();
  }

  getQuarterbacks() {
    this.quarterbackService.getQuarterbacks()
      .subscribe(quarterbacks => (
        this.quarterbacks = quarterbacks,
        this.activeQb = this.quarterbacks[0],
        this.selectedQb = this.activeQb.playerId)
        );
  }

  updateTable(event: any) {
    this.activeQb = this.quarterbacks.filter(qb => qb.playerId == event.value)[0];
    console.log(this.selectedQb)

  }

}
