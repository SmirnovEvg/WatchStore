import './css/main.css'
import './css/media-quaries.css'

import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import {syncHistoryWithStore} from 'react-router-redux'
import {Router, Route, browserHistory} from 'react-router'
import {Provider} from 'react-redux'

import reducers from 'reducers'
import Layout from 'containers/layout'
import Watches from 'containers/watches'
import Watch from 'containers/watch'
import Basket from 'containers/basket'
import MainPage from 'containers/mainpage'

const store = createStore(reducers, composeWithDevTools(
    applyMiddleware(thunk)
))

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={MainPage}/>
            <Route component={Layout}>
                <Route path='/catalog' component={Watches} />
                <Route path='categories/:id' component={Watches} />
            </Route>
            <Route path='/watches/:id' component={Watch}/>
            <Route path='/basket' component={Basket} />
        </Router>
    </Provider>,
    document.getElementById('root')
);
