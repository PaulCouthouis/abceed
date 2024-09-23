import type { Meta, StoryObj } from '@storybook/vue3'
import BookInformation from '../../components/BookInformation.vue'
import { createFakeBook } from '../domain/entities/Book'

type BookInformationMeta = Meta<typeof BookInformation>
type BookInformationStory = StoryObj<typeof BookInformation>

export default {
  component: BookInformation,
} satisfies BookInformationMeta

const book = createFakeBook()

export const Story = {
  args: { ...book },
} satisfies BookInformationStory
