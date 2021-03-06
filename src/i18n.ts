import { createI18n, I18nOptions, LocaleMessageDictionary } from 'vue-i18n';

function loadLocaleMessages() {
  const messages: LocaleMessageDictionary<string> = {};
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
} as I18nOptions); // as I18nOptions) as I18n & { install: never };
