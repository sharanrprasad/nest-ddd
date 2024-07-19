export enum PatronType {
  Regular = 'regular',
  Researcher = 'researcher',
}

export interface PatronDbEntity {
  patronId: string;
  patronType: PatronType;
  bookOnHold: string[];
}
