import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header';
import LinkList from './LinksList'
import CreateLink from './CreateLink';
import Login from './Login'

function App() {
  return (
    <div className="center w85">
      <Header />
      <div className="ph3 pv1 background-gray">
        <Switch>
          <Route exact path="/" component={ LinkList } />
          <Route exact path="/create" component={ CreateLink } />
          <Route exact path="/login" component={Login} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
