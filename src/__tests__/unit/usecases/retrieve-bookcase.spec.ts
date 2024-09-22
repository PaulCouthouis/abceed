import { describe, it, expect } from 'vitest'
import { createFakeBookcase } from '@/domain/entities/Bookcase'
import { RetrieveBookcase } from '@/domain/usecases/RetrieveBookcase'

describe('Retrieve bookcase', () => {
  it('should render the list of all book by categories', async () => {
    const { retrieveBookcase, expectedBookcase } = setup()

    const receivedBookcase = await retrieveBookcase.handle()

    expect(receivedBookcase).toEqual(expectedBookcase)
  })
})

const setup = () => {
  const expectedBookcase = createFakeBookcase()
  const fetchBookcaseStub = () => Promise.resolve(expectedBookcase)

  const retrieveBookcase = new RetrieveBookcase(fetchBookcaseStub)

  return { retrieveBookcase, expectedBookcase }
}
