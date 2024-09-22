import type { Bookcase } from '@/domain/entities/Bookcase'
export class RetrieveBookcase {
  constructor(
    private readonly fetchBookcaseFromExternalService: FetchBookcasePort
  ) {}

  async handle() {
    return this.fetchBookcaseFromExternalService()
  }
}

export type FetchBookcasePort = () => Promise<Bookcase>
