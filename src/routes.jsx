import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

import Home from './pages/Home';
import QrCodeAuth from './pages/QrCodeAuth';
import Consummation from './pages/Consummation';
import Requests from './pages/Requests';
import Product from './pages/Product/Product';

function Routes() {
	return (
		<BrowserRouter>
			<Switch>
				<Route exact path="/">
					<QrCodeAuth />
				</Route>
				<Route path="/home">
					<Home />
				</Route>
				<Route path="/requests"component={Requests}/>
				<Route path="/consummation"component={Consummation}/>
				<Route path="/product"component={Product}/>
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;