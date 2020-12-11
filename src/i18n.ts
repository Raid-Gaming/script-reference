// eslint-disable-next-line object-curly-newline
import { createI18n } from 'vue-i18n';

function loadLocaleMessages() {
  const messages: Record<string, string> = {};
  if (process.env.NODE_ENV !== 'test') {
    const locales = require.context('./locales', true, /[a-z0-9]+\.json$/i);
    locales.keys().forEach((key) => {
      const matched = key.match(/([a-z0-9]+)\./i);
      if (matched && matched.length > 1) {
        const locale = matched[1];
        messages[locale] = locales(key);
      }
    });
  }
  return messages;
}

export default createI18n({
  legacy: true,
  locale: 'en',
  fallbackLocale: 'en',
  messages: loadLocaleMessages(),
  silentTranslationWarn: process.env.NODE_ENV === 'development',
  warnHtmlInMessage: 'off', // translations are bundled and known, no possibility for XSS
});
