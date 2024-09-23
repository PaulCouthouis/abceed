import type { Meta, StoryObj } from '@storybook/vue3'
import BookActions from '../../components/BookActions.vue'

type BookActionsMeta = Meta<typeof BookActions>
type BookActionsStory = StoryObj<typeof BookActions>

export default {
  component: BookActions,
} satisfies BookActionsMeta

export const Story = {} satisfies BookActionsStory
