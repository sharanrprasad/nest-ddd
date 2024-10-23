import { BookFixtures } from '../../../../tests/book.fixtures';
import { PatronFixtures } from '../../../../tests/patron.fixtures';
import { PlaceBookOnHoldCommand } from '@repo/lending/patron/application/commands/place.book.hold.command';

describe('Place book on hold command', () => {
  it('should place book on hold if both patron and book exists', () => {
    // Given
    const book = BookFixtures.circulatingBook();
    // and
    const patron = PatronFixtures.getRegularPatron();
    // and
    const placeBookOnHold = new PlaceBookOnHoldCommand(
      book.bookId,
      patron.getId(),
      3,
    );
    // when
  });
});
