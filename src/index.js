import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'

const store = createStore(rootReducer)

/* Provider makes the store available to all 
    the child container components. Child components
    can connect to the store with the connect() method.
*/
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
