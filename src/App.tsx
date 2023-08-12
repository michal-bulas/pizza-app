import Details from './components/Details';
import Header from './components/Header';
import ItemsGrid from './components/ItemsGrid';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<>
			<Header />
			<main className='max-w-screen-2xl mx-auto mt-5'>
				<Routes>
					<Route
						path='/:collection?'
						element={<ItemsGrid />}
					/>
					<Route
						path='/:collection/:document'
						element={<Details />}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
