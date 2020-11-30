import React from 'react';
import {
	BrowserRouter,
	Switch,
	Route,
} from "react-router-dom";

import Home from './pages/Home';
import QrCodeAuth from './pages/QrCodeAuth';
import Consummation from './pages/Consummation';
import InitialProfile from './pages/InitialProfile';
import Requests from './pages/Requests';

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
			</Switch>
		</BrowserRouter>
	);
}

export default Routes;