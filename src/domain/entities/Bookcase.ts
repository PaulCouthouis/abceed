import { faker } from '@faker-js/faker'
import { z } from 'zod'
import { Shelf, createFakeShelf } from './Shelf'

export const Bookcase = z
  .object({
    shelf: z.array(Shelf),
  })
  .brand('Bookcase')
export type Bookcase = z.infer<typeof Bookcase>

export const createFakeBookcase = () => {
  const shelf = Array.from(
    { length: faker.number.int({ min: 1, max: 9 }) },
    createFakeShelf
  )

  return Bookcase.parse({ shelf })
}
