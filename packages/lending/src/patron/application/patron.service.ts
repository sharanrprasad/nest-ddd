import { Injectable } from '@nestjs/common';

@Injectable()
export class PatronService {
  get(bookId: string) {
    return bookId;
  }
}
