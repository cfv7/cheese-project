import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'

import {cheesesReducer} from './reducers'

export default createStore(cheesesReducer, applyMiddleware(thunk))