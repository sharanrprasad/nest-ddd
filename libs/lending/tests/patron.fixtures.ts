import { v4 as uuid } from 'uuid';
import { Patron } from '@repo/lending/patron/domain/patron';
import { PatronInformation } from '@repo/lending/patron/domain/value-objects/patron.information';
import { PatronType } from '@repo/lending/patron/infrastructure/models/patron.db.entity';
import { PatronHolds } from '@repo/lending/patron/domain/value-objects/patron.holds';

export class PatronFixtures {
  static getRegularPatron() {
    return new Patron(
      new PatronInformation(uuid(), PatronType.Regular),
      new PatronHolds([]),
      [],
    );
  }
}
