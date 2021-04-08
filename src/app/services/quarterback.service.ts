import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IQuarterback, IGameData } from '../models/IQuarterback';
import { QUARTERBACKS } from './data';

@Injectable({
  providedIn: 'root'
})
export class QuarterbackService {
  private quarterbacks: IQuarterback[] = [];

  constructor() { }

  getQuarterbacks(): Observable<IQuarterback[]> {
    QUARTERBACKS.forEach((qb, i) => {
      const gameDataList: IGameData[] = [];
      qb.rows.forEach(q => {
          const gameData: IGameData = {
            playerId: Number(q[0]),
            name: String(q[1]),
            playerImage: String(q[2]),
            seasonYear: Number(q[3]),
            week: Number(q[4]),
            gameDate: String(q[5]),
            teamName: String(q[6]),
            teamImage: String(q[7]),
            opponentName: String(q[8]),
            opponentImage: String(q[9]),
            attempts:    Number(q[10]),
            completions:  Number(q[11]),
            sacks:    Number(q[12]),
            interceptions:  Number(q[13]),
            passingYards:    Number(q[14]),
            passingTds:  Number(q[15]),
            rushAttempts:    Number(q[16]),
            rushYards:  Number(q[17]),
            rushTds:    Number(q[18])
          }

          gameDataList.push(gameData);
      });

      const quarterback: IQuarterback = {
        playerId: gameDataList[0].playerId,
        name: gameDataList[0].name,
        playerImage: gameDataList[0].playerImage,
        seasonYear: gameDataList[0].seasonYear,
        teamImage: gameDataList[0].teamImage,
        gameData: gameDataList
      }

      this.quarterbacks.push(quarterback);
    })
    return of(this.quarterbacks);
  }
}
