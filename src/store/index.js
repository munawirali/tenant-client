import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers/tenant_company'

const newCompose = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

let finalCreateStore = newCompose(
  applyMiddleware(thunk)
)

export default createStore(reducers, finalCreateStore)
