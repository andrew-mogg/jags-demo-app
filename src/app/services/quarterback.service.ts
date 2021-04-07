import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { QuarterbackData } from '../models/IQuarterbackData';
import { IQuarterback } from '../models/IQuarterback';
import { QUARTERBACKS } from './data';

@Injectable({
  providedIn: 'root'
})
export class QuarterbackService {
  quarterbacks: IQuarterback[] = [];

  constructor() { }

  getQuarterbacks(): Observable<IQuarterback[]> {
    QUARTERBACKS.forEach((qb, i) => {
      console.log(qb.header)
    })

    return of(this.quarterbacks);
  }
}
