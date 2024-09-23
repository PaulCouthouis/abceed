import type { Meta, StoryObj } from '@storybook/vue3'

import MyBookcase from '../../src/components/MyBookcase.vue'

type MyBookcaseMeta = Meta<typeof MyBookcase>
type MyBookcaseStory = StoryObj<typeof MyBookcase>

export default {
  component: MyBookcase,
} satisfies MyBookcaseMeta

export const Story = {} satisfies MyBookcaseStory
