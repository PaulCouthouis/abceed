import type { Meta, StoryObj } from '@storybook/vue3'

import MyBookcase from '../../src/components/MyBookcase.vue'
import { createFakeBookcase } from '../domain/entities/Bookcase'

type MyBookcaseMeta = Meta<typeof MyBookcase>
type MyBookcaseStory = StoryObj<typeof MyBookcase>

export default {
  component: MyBookcase,
} satisfies MyBookcaseMeta

const fakeBookcase = createFakeBookcase()

export const Story = {
  args: {
    shelf: fakeBookcase.shelf,
  },
} satisfies MyBookcaseStory
