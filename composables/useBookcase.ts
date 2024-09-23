import { RetrieveBookcase } from '~/src/domain/usecases/RetrieveBookcase'
import { fetchBookcaseFromHttp } from '~/src/http/fetchBookcaseFromHttp'

const retrieveBookcase = new RetrieveBookcase(fetchBookcaseFromHttp)

export const useBookcase = () => {
  return useAsyncData('bookcase', () => retrieveBookcase.handle())
}
