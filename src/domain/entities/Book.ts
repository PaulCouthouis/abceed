import { faker } from '@faker-js/faker'
import { z } from 'zod'

export const Book = z
  .object({
    id: z.string().min(1),
    cover: z.string().min(1),
    name: z.string().min(1),
  })
  .brand('Book')

export const createFakeBook = () => {
  const cover = faker.image.url()
  const name = faker.lorem.sentence(3)
  const id = name.toLowerCase().replaceAll(' ', '-')

  return Book.parse({
    cover,
    id,
    name,
  })
}
