import type { Book } from '~/src/domain/entities/Book'
import { TakeBookInBookcase } from '~/src/domain/usecases/TakeBookInBookcase'

export const useBook = (id: Book['id']) => {
  const takeBookInBookcase = useTakeBookInBookcase()
  return takeBookInBookcase?.handle(id)
}

const useTakeBookInBookcase = () => {
  const { data: bookcaseRef } = useBookcase()
  if (bookcaseRef.value) {
    return new TakeBookInBookcase(bookcaseRef.value)
  }
}
