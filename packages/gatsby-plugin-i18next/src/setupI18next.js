import i18next from 'i18next';

function setupI18next(fallbackLng, i18nextOptions) {
  i18next.init({
    debug: false,
    defaultNS: 'messages',
    fallbackLng,
    ...i18nextOptions,
  });

  return i18next;
}

export default setupI18next;
