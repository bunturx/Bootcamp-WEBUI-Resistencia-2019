import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //facilita la integracion de redux con componentes de react
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from './component/results';
import Details from './component/details';
import store  from './redux/store';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/results" />
            </Switch>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));