export class PatronHolds {
  static MAX_NUMBER_OF_HOLDS = 5;
  constructor(private currentHolds: string[]) {}

  isMaxHolds() {
    return this.currentHolds.length >= PatronHolds.MAX_NUMBER_OF_HOLDS;
  }
}
