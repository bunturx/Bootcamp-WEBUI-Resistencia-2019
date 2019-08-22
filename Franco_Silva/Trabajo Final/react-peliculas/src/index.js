import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'; //facilita la integracion de redux con componentes de react
import { BrowserRouter, Route, Redirect, Switch } from 'react-router-dom';
import Results from './component/results';
import Details from './component/details';
import store  from './redux/store';
import Header from './components/header';
import Footer from './components/footer';

const Root = (
    <Provider store={store}>
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route path="/results" component={Results} />
                <Route path="/details/:itemId" component={Details} />
                <Redirect from="/" to="/results" />
            </Switch>
            <Footer/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));