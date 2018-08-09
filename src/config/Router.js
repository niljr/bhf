import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Homepage from '../container/Homepage';
import LoginContainer from '../container/LoginContainer';
import ProfileContainer from '../container/ProfileContainer';
import RegisterContainer from '../container/RegisterContainer';
import NotFoundContainer from '../container/NotFoundContainer';
import AddBoardingHouseContainer from '../container/AddBoardingHouseContainer';
import EditBoardingHouseContainer from '../container/EditBoardingHouseContainer';
import BoardingHouseInformationContainer from '../container/BoardingHouseInformationContainer';
import ChartContainer from '../container/ChartContainer';

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Homepage} />
      <Route path="/login" component={LoginContainer} />
      <Route path="/profile/:userId" component={ProfileContainer} />
      <Route path="/register-form" component={RegisterContainer} />
      <Route path="/add-boarding-house-form" component={AddBoardingHouseContainer} />
      <Route path="/edit-boarding-house-form/:boardingHouseId" component={EditBoardingHouseContainer} />
      <Route path="/:boardingHouseId/information" component={BoardingHouseInformationContainer} />
      <Route path="/chart" component={ChartContainer} />

      <Route component={NotFoundContainer} />
    </Switch>
  </BrowserRouter>
);

export default Router;
