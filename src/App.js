import About from 'Components/pages/About/About';
import Contacts from 'Components/pages/Contacts';
import Footer from 'Components/pages/Footer';
import Home from 'Components/pages/Home';
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route
					path='*'
					element={
						<>
							<Home />
							<About />
							<Contacts />
							<Footer />
						</>
					}
				/>
			</Routes>
		</HashRouter>
	);
}

export default App;
