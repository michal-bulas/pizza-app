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
						path='/'
						element={<ItemsGrid documentName={'pizzas'} />}
					/>
					<Route
						path='/pizzas'
						element={<ItemsGrid documentName={'pizzas'} />}
					/>
					<Route
						path='/ingredients'
						element={<ItemsGrid documentName={'ingredients'} />}
					/>
					<Route
						path='/actions'
						element={<ItemsGrid documentName={'actions'} />}
					/>
				</Routes>
				<Details
					name='test'
					list={['sd', 'sds', 'sdsd', 'sd', 'sd', 'sds', 'sdsd', 'sd']}
					listName='name'
				></Details>
			</main>
		</>
	);
}

export default App;
