import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';

import { IQuarterback, IGameData } from '../models/IQuarterback';
import { ISeasonStats } from '../models/ISeasonStats';
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
          gameData.completionPercentage = gameData.completions / gameData.attempts;
          gameData.yardsPerAttempt = Math.ceil((gameData.passingYards / gameData.attempts) * 10) / 10;
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
      quarterback.seasonStats = this.calculateSeasonStats(quarterback.gameData)

      this.quarterbacks.push(quarterback);
      console.log(this.quarterbacks)
    })
    return of(this.quarterbacks);
  }

  private calculateSeasonStats(gameStats: IGameData[]) : ISeasonStats {
    const seasonStats: ISeasonStats = {
      year: gameStats[0].seasonYear,
      attempts: gameStats.filter(gs => gs.attempts).reduce((a, b) => a + b.attempts, 0),
      completions: gameStats.filter(gs => gs.completions).reduce((a, b) => a + b.completions, 0),
      sacks: gameStats.filter(gs => gs.sacks).reduce((a, b) => a + b.sacks, 0),
      interceptions: gameStats.filter(gs => gs.interceptions).reduce((a, b) => a + b.interceptions, 0),
      passingYards: gameStats.filter(gs => gs.passingYards).reduce((a, b) => a + b.passingYards, 0),
      passingTds: gameStats.filter(gs => gs.passingTds).reduce((a, b) => a + b.passingTds, 0),
      rushAttempts: gameStats.filter(gs => gs.attempts).reduce((a, b) => a + b.rushAttempts, 0),
      rushYards: gameStats.filter(gs => gs.attempts).reduce((a, b) => a + b.rushYards, 0),
      rushTds: gameStats.filter(gs => gs.attempts).reduce((a, b) => a + b.rushTds, 0),
    }
    seasonStats.completionPercentage = seasonStats.completions / seasonStats.attempts;
    seasonStats.yardsPerAttempt = seasonStats.passingYards / seasonStats.attempts;

    return seasonStats;
  }
}
