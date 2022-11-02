/* eslint-disable import/no-extraneous-dependencies */
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import MyButton from '../components/MyButton.vue'

export default {
  title: 'Button',
}

export const withText = () => ({
  components: { MyButton },
  template: `
  <my-button @click="action">
    <template v-slot:text>My text</template>
  </my-button>`,
  methods: { action: action('clicked') }
})



