import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CourseDetailsPage from '../Pages/CourseDetailsPage';
import Home from '../Pages/Home';

const Routes = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/learn/:code">
          <CourseDetailsPage />
        </Route>
        <Route>
          <h1>404: Page Not Found</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default Routes;
