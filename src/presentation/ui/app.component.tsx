import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AppContainer } from 'containers';
import { Routes } from 'presentation/ui/routes';
import { IoC } from './components/ioc';
import { GlobalStyles } from './styles';

export const App = (): React.ReactElement => {
  return (
    <IoC.Provider container={AppContainer}>
      <GlobalStyles />
      <Router>
        <Routes />
      </Router>
    </IoC.Provider>
  );
};
