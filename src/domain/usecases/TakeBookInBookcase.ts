import type { Book } from '~/src/domain/entities/Book'
import type { Bookcase } from '~/src/domain/entities/Bookcase'

export class TakeBookInBookcase {
  #flattedBooks = Array.from<Book>([])

  constructor(readonly bookcase: Bookcase) {
    this.#flattedBooks = bookcase.shelf.flatMap(({ books }) => books)
  }

  handle(bookId: Book['id']) {
    return this.#flattedBooks.find(({ id }) => id === bookId)
  }
}
