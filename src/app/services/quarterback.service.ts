import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { Quarterback } from '../models/quarterback';
import { QUARTERBACKS } from './data';

@Injectable({
  providedIn: 'root'
})
export class QuarterbackService {

  constructor() { }

  getQuarterbacks(): Observable<Quarterback[]> {
    return of(QUARTERBACKS);
  }
}
