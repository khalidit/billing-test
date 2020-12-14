import React, { PropsWithChildren } from 'react';
import IntlProvider from './intl.provider';
import RouterProvider from './router.provider';
import StoreProvider from './store.provider';

const Providers: React.FunctionComponent<PropsWithChildren<{}>> = ({ children }) => {
  return (
    <StoreProvider>
      <IntlProvider>
        <RouterProvider>{children}</RouterProvider>
      </IntlProvider>
    </StoreProvider>
  );
};

export default Providers;
