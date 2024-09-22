import { faker } from '@faker-js/faker'
import { z } from 'zod'
import { Book, createFakeBook } from './Book'

export const Shelf = z
  .object({
    category: z.string().min(1),
    books: z.array(Book),
  })
  .brand('Shelf')
export type Shelf = z.infer<typeof Shelf>

export const createFakeShelf = () => {
  const books = Array.from(
    { length: faker.number.int({ min: 1, max: 9 }) },
    createFakeBook
  )
  const category = faker.lorem.word()

  return Shelf.parse({ books, category })
}
