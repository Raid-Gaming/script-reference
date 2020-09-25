// eslint-disable-next-line object-curly-newline
import { createI18n, I18nOptions, LocaleMessages, VueMessageType } from 'vue-i18n';

function loadLocaleMessages(): LocaleMessages<VueMessageType> {
  const messages: LocaleMessages<VueMessageType> = {};
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

function getI18nConfig(): I18nOptions {
  const config: I18nOptions = {
    legacy: true,
    locale: 'en',
    fallbackLocale: 'en',
    messages: loadLocaleMessages(),
    silentTranslationWarn: process.env.NODE_ENV === 'development',
  };
  return config;
}

export default createI18n(getI18nConfig());
