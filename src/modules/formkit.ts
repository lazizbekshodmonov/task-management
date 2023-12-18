import type { UserModule } from '~/types'
import { plugin, defaultConfig } from '@formkit/vue'

// Setup Pinia
// https://pinia.vuejs.org/
export const install: UserModule = ({ isClient, app }) => {
  app.use(plugin, defaultConfig)
}