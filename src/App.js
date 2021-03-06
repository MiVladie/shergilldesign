import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import Header from './components/Header/Header';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Admin from './containers/Admin/Admin';
import NotFound from './containers/NotFound/NotFound';
import Footer from './components/Footer/Footer';

class App extends Component {
  render () {
    return (
      <Layout>
        
        <Route render = { ({ location }) => (
          <React.Fragment>
            <Header />
            <Navigation />

            <Switch location = { location }>
              <Route path = '/' exact component = { Home } />
              <Route path = '/admin' exact component = { Admin } />
              <Route render = { () => <NotFound /> } />
            </Switch>

            <Footer />

          </React.Fragment>
        )} />

      </Layout>
    );
  }
}

export default App;

/*

$red: #FF5959;
$blue: #002BD1;
$black: #2E2E2E;

*/
