import { describe, expect, it } from 'vitest'
import { fetchBookcaseFromHttp } from '~/src/http/fetchBookcaseFromHttp'

describe('Integration test : https://dev-app-api.abceed.com/mock/book/all', () => {
  it('should respect contract with this client', async () => {
    await expect(fetchBookcaseFromHttp()).resolves.not.toThrow()
  })
})
