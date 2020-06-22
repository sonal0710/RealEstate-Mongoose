const i18n = require('i18n');

i18n.configure({
  locales: process.env.LANGUAGES.split(','),
  directory: './locales',
  defaultLocale: process.env.DEFAULT_LANGUAGE,
  autoReload: true,
  updateFiles: false
});

module.exports = i18n;