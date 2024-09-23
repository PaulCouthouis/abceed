import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { fetchBookcaseFromHttp } from '@/http/fetchBookcaseFromHttp'
import { setupServer } from 'msw/node'
import { http, HttpResponse } from 'msw'

describe('Fetch bookcase from http adapter', () => {
  const mockServer = setupServer(
    http.get('https://dev-app-api.abceed.com/mock/book/all', () => {
      return HttpResponse.json(fetchedFromApi)
    })
  )

  beforeAll(() => {
    mockServer.listen()
  })

  afterAll(() => {
    mockServer.resetHandlers()
    mockServer.close()
  })

  it('should receive good bookcase', async () => {
    const receivedBookcase = await fetchBookcaseFromHttp()
    expect(receivedBookcase).toEqual(expectedBookcase)
  })
})

const fetchedFromApi = {
  top_category_list: [
    {
      name_category: 'すべて',
      sub_category_list: [
        {
          book_list: [
            {
              author: 'John Doe',
              id_book: 'book-1',
              img_url: 'http://test/book-1.svg',
              name_book: 'Book 1',
              publisher: 'Company A',
            },
            {
              author: 'Jeanne Dae',
              id_book: 'book-2',
              img_url: 'http://test/book-2.svg',
              name_book: 'Book 2',
              publisher: 'Company B',
            },
          ],
          name_category: 'Category 1',
        },
        {
          name_category: 'Category 2',
          book_list: [
            {
              author: 'Eiichirō Oda',
              id_book: 'book-3',
              img_url: 'http://test/book-3.svg',
              name_book: 'Book 3',
              publisher: 'Shueisha',
            },
          ],
        },
      ],
    },
    {
      name_category: 'Other',
      sub_category_list: [
        {
          book_list: [
            {
              id_book: 'book-99',
              img_url: 'http://test/book-99.svg',
              name_book: 'Book 99',
            },
          ],
          name_category: 'Category 99',
        },
      ],
    },
  ],
}

const expectedBookcase = {
  shelf: [
    {
      books: [
        {
          author: 'John Doe',
          cover: 'http://test/book-1.svg',
          id: 'book-1',
          name: 'Book 1',
          publisher: 'Company A',
        },
        {
          author: 'Jeanne Dae',
          cover: 'http://test/book-2.svg',
          id: 'book-2',
          name: 'Book 2',
          publisher: 'Company B',
        },
      ],
      category: 'Category 1',
    },
    {
      books: [
        {
          author: 'Eiichirō Oda',
          cover: 'http://test/book-3.svg',
          id: 'book-3',
          name: 'Book 3',
          publisher: 'Shueisha',
        },
      ],
      category: 'Category 2',
    },
  ],
}
