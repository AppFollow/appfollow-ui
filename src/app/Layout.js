import {BrowserRouter, Route, Router, Switch} from 'react-router-dom';
import history from 'app/history';
import {Sidebar} from 'app/Sidebar';
import {Colors} from 'app/Colors';
import {Buttons} from 'app/Buttons';
import {Main} from 'app/Main';

export const Layout = () => (
	<BrowserRouter>
		<div className="page">
			<Sidebar />
			<div className="page-content">
				<Router history={history}>
					<Switch>
						<Route path="/colors" exact component={Colors} />
						<Route path="/buttons" exact component={Buttons} />
						<Route path="/" exact component={Main} />
					</Switch>
				</Router>
			</div>
		</div>
	</BrowserRouter>
);
