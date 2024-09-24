import type { Book } from '~/src/domain/entities/Book'

export const useMyBooksStore = defineStore('my-books', () => {
  const collection = ref(new Set<Book['id']>())

  const toggle = (bookId: Book['id']) => {
    const CollectionSet = collection.value

    if (CollectionSet.has(bookId)) {
      CollectionSet.delete(bookId)
      return
    }

    CollectionSet.add(bookId)
  }

  const has = (bookId: Book['id']) => {
    return computed(() => collection.value.has(bookId))
  }

  return { collection, has, toggle }
})
