import { PatronType } from '../../patron/infrastructure/models/patron.db.entity';
import { PatronInformation } from './value-objects/patron.information';
import { PatronHolds } from './value-objects/patron.holds';
import { Patron } from './patron';
import { PlaceOnHoldPolicy } from './policies/place.on.hold.policy';

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
