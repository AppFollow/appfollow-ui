// eslint-disable-next-line
import 'css/main.scss';
import ReactDOM from 'react-dom';
import {Layout} from './app/Layout';

const PROD_ENV = process.env.NODE_ENV === 'production';

class App {
	constructor() {
		this.startApp();
	}

	startApp() {
		this.appElement = document.querySelector('#app');

		if (this.appElement) {
			this.render();
		}
	}

	render() {
		ReactDOM.render(<Layout />, this.appElement);
	}
}

if (!PROD_ENV) {
	window.moment = moment;
}

window.app = new App();
export default window.app;
