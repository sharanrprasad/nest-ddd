import { Injectable } from '@nestjs/common';
import { add } from '@repo/utils';

@Injectable()
export class PatronService {
  get(bookId: string) {
    console.log(add(2, 3));
    return bookId;
  }
}
