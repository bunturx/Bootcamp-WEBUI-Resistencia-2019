import React from 'react';
import ReactDOm from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from './component/results';
import Details from './component/details';


const Root = (
    <BrowserRouter>
        <Switch>
                <Route path="/results" component= {Results} />
                <Route path="/details/:itemId" component= {Details} />
                <Redirect from="/" to="/results" />
        </Switch>
    </BrowserRouter>
);

ReactDOm.render(Root, document.getElementById('root'));

