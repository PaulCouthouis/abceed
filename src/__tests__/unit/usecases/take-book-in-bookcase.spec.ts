import { describe, expect, it } from 'vitest'
import { createFakeBookcase } from '@/domain/entities/Bookcase'
import { TakeBookInBookcase } from '@/domain/usecases/TakeBookInBookcase'

describe('Take book in bookcase', () => {
  it('should read book informations', () => {
    const { expectedBook, takeBookInBookcase } = setup()

    const receivedBook = takeBookInBookcase.handle(expectedBook.id)

    expect(receivedBook).toEqual(expectedBook)
  })
})

const setup = () => {
  const bookcase = createFakeBookcase()

  const takeBookInBookcase = new TakeBookInBookcase(bookcase)

  // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
  const expectedBook = bookcase.shelf.at(2)?.books.at(1)!

  return { takeBookInBookcase, expectedBook }
}
