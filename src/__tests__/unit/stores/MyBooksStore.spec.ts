// @vitest-environment happy-dom

import { beforeEach, describe, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import type { Book } from '~/src/domain/entities/Book'
import { useMyBooksStore } from '~/src/stores/useMyBooksStore'

describe('My books store', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('should add books id in the collection', () => {
    const { store } = setup()

    store.toggle('book-id')

    expect(store.has('book-id').value).toBe(true)
  })

  it('should remove books id in the collection', () => {
    const { store } = setup(new Set(['book-id']))

    store.toggle('book-id')

    expect(store.has('book-id').value).toBe(false)
  })
})

const setup = (initialCollection = new Set<Book['id']>()) => {
  const store = useMyBooksStore()
  store.collection = initialCollection
  return { store }
}
