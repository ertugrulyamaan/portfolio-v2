import en from './locales/en.json'
import tr from './locales/tr.json'

export default defineI18nConfig(() => ({
  legacy: false,
  fallbackLocale: 'en',
  messages: { en, tr },
}))