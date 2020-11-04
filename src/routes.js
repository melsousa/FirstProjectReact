import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import Main from './pages/main';
import Product from './pages/product'

const Routes = () => (
    //definindo a utilização das rotas através de um browser {BrowserRoutes}
    //apenas uma rota seja chamada {Routes}
    <BrowserRouter>
     <Switch> 
         {/* propriedade exact, quando a rota for exatamente igual */}
        <Route exact path="/" component={Main}/>
        {/* acessando as informações do produto */}
        <Route path="/products/:id" component={Product}/>
     </Switch>
    </BrowserRouter>
);

export default Routes;
