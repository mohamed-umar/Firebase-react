import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Home, AddNewTeam, TeamDetail } from './Pages';

const Routes = () => {
  return (
        <Router>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/teamdetail/:id' component={TeamDetail} />
                <Route path='/addteam' component={AddNewTeam} />
            </Switch>
        </Router>  
  )};

export default Routes;