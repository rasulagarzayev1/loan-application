/**
 * main.ts
 *
 * Bootstraps Vuetify and other plugins then mounts the App`
 */
import '@mdi/font/css/materialdesignicons.css'
import '@mdi/font/fonts/materialdesignicons-webfont.ttf'
import '@mdi/font/fonts/materialdesignicons-webfont.eot'
// Components
import App from './App.vue'

// Composables
import { createApp } from 'vue'

// Plugins
import { registerPlugins } from '@/plugins'

const app = createApp(App)

registerPlugins(app)

app.mount('#app')
