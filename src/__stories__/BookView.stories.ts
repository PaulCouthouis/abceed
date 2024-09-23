import type { Meta, StoryObj } from '@storybook/vue3'
import BookView from '../../components/BookView.vue'
import { createFakeBook } from '../domain/entities/Book'

type BookViewMeta = Meta<typeof BookView>
type BookViewStory = StoryObj<typeof BookView>

export default {
  component: BookView,
} satisfies BookViewMeta

const book = createFakeBook()

export const Story = {
  args: { ...book },
} satisfies BookViewStory
