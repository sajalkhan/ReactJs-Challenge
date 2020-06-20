import React,{Component} from 'react';

import Alert from './Component/Layout/Alerts';
import Header from './Component/Layout/Header';
import SignInScreen from './Component/SignInScreen';
import DashboardScreen from './Component/DashboardScreen';
import ItemListScreen from './Component/ItemListcScreen';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { loadUser } from './Action/loginAction';
import store from './Store';

class App extends Component{

  componentDidMount(){
    store.dispatch(loadUser());
  }

  render() {
    return (
      <Router>
        <div className="grid-container">
          <Header />
          <main className="main">
            <div className="content">
              <Alert />
              <Switch>
                <Route exact path="/" component={SignInScreen} />
                <Route exact path="/homepage" component={DashboardScreen} />
                <Route exact path="/items" component={ItemListScreen} />
              </Switch>
            </div>
          </main>
          <footer className="footer"> All Right Reserved.</footer>
        </div>
      </Router>
    );
  }
}

export default App;
