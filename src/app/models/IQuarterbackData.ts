export interface QuarterbackData {
  totalRows: number;
  status:    string;
  startRow:  number;
  queryTime: number;
  header:    Header[];
  rows:      Array<Row[]>;
}

export interface Header {
  desc?:          string;
  name?:          string;
  defaultSort:    DefaultSort;
  label:          string;
  formatDef?:     FormatDef;
  selectClause:   string;
  canBeAveraged?: boolean;
  eventQuery?:    string;
  authorization?: string[];
}

export enum DefaultSort {
  Asc = "ASC",
  Desc = "DESC",
}

export interface FormatDef {
  type: Type;
}

export enum Type {
  Integer = "INTEGER",
}

export type Row = number | string;
