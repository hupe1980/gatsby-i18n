import i18next from 'i18next';

function setupI18next(fallbackLng, i18nextOptions) {
  i18next.init({
    debug: false,
    defaultNS: 'messages',
    fallbackLng,
    react: {
      useSuspense: false,
    },
    ...i18nextOptions,
  });

  return i18next;
}

export default setupI18next;
