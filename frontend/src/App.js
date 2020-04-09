import React from 'react';
import './App.css';
import PropTypes from 'prop-types'
import { ConnectedRouter } from 'connected-react-router'
import Main from './pages/Main'
import Join from './pages/Join'
import Reservations from './pages/Reservations'

import {Route, Switch} from 'react-router'

const App = ({ history }) => {
  return (
    <ConnectedRouter history={history}>
      


      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/join" component={Join} />
        <Route exact path="/reservation" component={Reservations} />
       
      </Switch>
    </ConnectedRouter>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App;
