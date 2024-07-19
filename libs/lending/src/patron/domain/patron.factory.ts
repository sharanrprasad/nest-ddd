import { PatronType } from 'libs/lending/src/patron/infrastructure/models/patron.db.entity';
import { PatronInformation } from 'libs/lending/src/patron/domain/value-objects/patron.information';
import { PatronHolds } from './value-objects/patron.holds';
import { Patron } from 'libs/lending/src/patron/domain/patron';
import { PlaceOnHoldPolicy } from 'libs/lending/src/patron/domain/policies/place.on.hold.policy';

export class PatronFactory {
  static toDomainModel(
    patronId: string,
    patronType: PatronType,
    currentHolds: string[],
  ) {
    const patronHoldVO = new PatronHolds(currentHolds);
    const patronInformation = new PatronInformation(patronId, patronType);
    return new Patron(
      patronInformation,
      patronHoldVO,
      PlaceOnHoldPolicy.allPolicies(),
    );
  }
}
