import { ISeasonStats } from './ISeasonStats';

export interface IQuarterback {
  playerId?: number;
  name?: string;
  playerImage?: string;
  seasonYear?: number;
  teamImage?: string;
  seasonStats?: ISeasonStats;
  gameData?: IGameData[];
}

export interface IQuarterbackSeasonData {
  playerId: number;
  name: string;
  playerImage: string;
  seasonYear: number;
}

export interface IGameData {
  playerId: number;
  name: string;
  playerImage: string;
  seasonYear: number;
  week: number;
  gameDate: string;
  teamName: string;
  teamImage: string;
  opponentName: string;
  opponentImage: string;
  attempts:    number;
  completions:  number;
  sacks:    number;
  interceptions:  number;
  passingYards:    number;
  passingTds:  number;
  rushAttempts:    number;
  rushYards:  number;
  rushTds:    number;
  yardsPerAttempt?: number;
  completionPercentage?: number;
}
