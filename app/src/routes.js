import React from 'react';
import { Route, IndexRoute } from 'react-router';
import CoreLayout from 'layouts/Core';
import LandingLayout from 'layouts/Landing';
import SignIn from 'modules/user/containers/SignIn';

export default () => {
  return (
    <Route component={CoreLayout}>
      <Route path="/" component={LandingLayout}>
        <IndexRoute component={SignIn} />
      </Route>
    </Route>
  )
}
