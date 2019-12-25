import React, { Suspense } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import routes from './constants/routes';
import Loader from './components/Loader';

function App() {
  const renderComponent = (Component, name) => (arg) => {
    return (
    <Suspense fallback={<Loader />}>
        <Component label={name} {...arg} />
      </Suspense>
    );
  };

  return(
    <Router>
    <Switch>
      {routes.map(({ label, path, component, exact }) => (
          <Route
            key={path}
            exact={exact}
            path={path}
            render={renderComponent(component, label)}
          />
      ))}
    </Switch>
    </Router>
  );
}

export default App;
