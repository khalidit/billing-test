import React, { Suspense, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Providers from './providers';
import ErrorBoundary from './components/ErrorBoundary';

import AppLayout from './components/AppLayout';
import AppHeader from './components/Header/AppHeader';
import AppFooter from './components/Footer/AppFooter';

const Home = React.lazy(() => import('./pages/Home'));
const Factures = React.lazy(() => import('./pages/Facture/Read'));
const NotFound = lazy(() => import('./pages/NotFound'));

const App: React.FunctionComponent<{}> = () => {
  return (
    <Providers>
      <AppLayout
        header={<AppHeader />}
        content={
            <ErrorBoundary>
              <Suspense
                fallback={<>Loading</>}
              >
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact  path="/factures" component={Factures} />
                  <Route component={NotFound} />
                </Switch>
              </Suspense>
            </ErrorBoundary>
        }
        footer={<AppFooter />}
      />
    </Providers>
  );
};

export default App;
