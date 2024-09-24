import { setup, type Preview } from '@storybook/vue3'

import '../reset.css'

import { createPinia } from 'pinia'

const pinia = createPinia()

setup((app) => {
  app.use(pinia)
})

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
  },
}

export default preview
