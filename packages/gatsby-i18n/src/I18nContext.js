import React from 'react';

const I18nContext = React.createContext();

export function I18nProvider({ children, ...rest }) {
  return (
    <I18nContext.Provider value={{ ...rest }}>{children}</I18nContext.Provider>
  );
}

export const I18nConsumer = I18nContext.Consumer;
