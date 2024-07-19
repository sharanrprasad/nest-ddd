import { PatronType } from 'libs/lending/src/patron/infrastructure/models/patron.db.entity';

export class PatronInformation {
  constructor(
    public patronId: string,
    public patronType: PatronType,
  ) {}
}
