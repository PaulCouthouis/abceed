import { faker } from '@faker-js/faker'
import { z } from 'zod'

export const Book = z
  .object({
    id: z.string().min(1),
    author: z.string().min(1),
    cover: z.string().min(1),
    name: z.string().min(1),
    publisher: z.string().min(1),
  })
  .brand('Book')
export type Book = z.infer<typeof Book>

export const createFakeBook = () => {
  const author = faker.person.fullName()
  const cover = faker.image.url({
    height: faker.number.int({ min: 200, max: 400 }),
    width: 200,
  })
  const name = faker.lorem.sentence(3)
  const publisher = faker.company.name()

  const id = name.toLowerCase().replaceAll(' ', '-')

  return Book.parse({
    id,
    author,
    cover,
    name,
    publisher,
  })
}
