import React from 'react';
import { Route } from 'react-router-dom';

import MainPage from './pages/MainPage';

export default function Routes() {
  return <Route path="/" exact component={MainPage} />;
}
