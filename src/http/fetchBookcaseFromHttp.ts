import { Book } from '../domain/entities/Book'
import { Bookcase } from '../domain/entities/Bookcase'
import { Shelf } from '../domain/entities/Shelf'
import type { FetchBookcasePort } from '../domain/usecases/RetrieveBookcase'

export const fetchBookcaseFromHttp: FetchBookcasePort = async () => {
  const response = await fetch('https://dev-app-api.abceed.com/mock/book/all')
  const fetched = (await response.json()) as FromHttp

  const allBooks = fetched.top_category_list.find(({ name_category }) => {
    return name_category === 'すべて'
  })!.sub_category_list

  const shelf = convertToShelf(allBooks)

  return Bookcase.parse({ shelf })
}

type BookFromHttp = {
  id_book: string
  img_url: string
  name_book: string
}

type ShelfFromHttp = {
  book_list: readonly BookFromHttp[]
  name_category: string
}[]

type FromHttp = {
  top_category_list: readonly {
    name_category: string
    sub_category_list: ShelfFromHttp
  }[]
}

function convertToShelf(allBooks: ShelfFromHttp): readonly Shelf[] {
  return allBooks?.map(({ book_list, name_category }) => {
    return Shelf.parse({
      category: name_category,
      books: convertToBooks(book_list),
    })
  })
}

function convertToBooks(book_list: readonly BookFromHttp[]): readonly Book[] {
  return book_list.map(({ id_book, img_url, name_book }) => {
    return Book.parse({
      cover: img_url,
      id: id_book,
      name: name_book,
    })
  })
}
