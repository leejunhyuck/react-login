import {combineReducers} from 'redux'
import userReducer from './userReducers'
import { connectRouter } from 'connected-react-router'
import { createBrowserHistory } from 'history'

const history = createBrowserHistory()

const rootReducer = (history) => combineReducers(
   {
      userReducer:userReducer,
      router: connectRouter(history)
   }
)

export default rootReducer
