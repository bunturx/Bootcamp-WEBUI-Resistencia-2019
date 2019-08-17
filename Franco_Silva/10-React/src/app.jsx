import React from 'react';
import ReactDOM from 'react-dom';
import Template from './pages/Template';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createLogger } from 'redux-logger';
import reducers from './reducers';
import ReduxThunk from 'redux-thunk';

const logger = createLogger({diff: true});
const middleware = applyMiddleware(logger, ReduxThunk)(createStore);
const store = middleware(reducers);

ReactDOM.render(
    <Provider store={store}>
        <Template />
    </Provider>,
    document.getElementById("main")
);