import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from './hoc/Layout/Layout';
import PrivateRoute from "./privateRoute";
import Login from "./containers/Login/Login";
import Dashboard from "./containers/Dashboard/Dashboard";
import NotFound from "./components/NotFound/NotFound";
import Board from "./containers/Board/Board";

class App extends Component {
  render () {
      return (
        <div>
          <Layout>
            <Switch>
              <Route exact path={"/"} component={Login} />
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
              <PrivateRoute exact path="/board/:boardId" component={Board} />
              <Route component={NotFound} />
            </Switch>
          </Layout>
        </div>
      );
    }
}



export default App;