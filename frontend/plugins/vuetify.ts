import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import { createVuetify } from 'vuetify'

const customTheme = {
  dark: true,
  colors: {
    background: '#080B12',
    surface: '#111827',
    'surface-low': '#1F2937',
    'surface-high': '#2D3748',
    primary: '#F8FAFC',
    'on-primary': '#020617',
    secondary: '#94A3B8',
    'on-secondary': '#020617',
    tertiary: '#22D3EE',
    'on-tertiary': '#06202A',
    accent: '#22D3EE',
    error: '#F87171',
    info: '#38BDF8',
    success: '#34D399',
    warning: '#FBBF24',
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  const vuetify = createVuetify({
    ssr: true,
    theme: {
      defaultTheme: 'customTheme',
      themes: {
        customTheme,
      },
    },
  })

  nuxtApp.vueApp.use(vuetify)
})
