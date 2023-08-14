import ActionDetails from './components/Details/ActionDetails';
import IngredientDetails from './components/Details/IngredientDetails';
import PizzaDetails from './components/Details/PizzaDetails';
import ErrorComponent from './components/ErrorComponent';
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
						path='/pizzas/:document'
						element={<PizzaDetails />}
					/>
					<Route
						path='/actions/:document'
						element={<ActionDetails />}
					/>
					<Route
						path='/ingredients/:document'
						element={<IngredientDetails />}
					/>
					<Route
						path='*'
						element={<ErrorComponent />}
					/>
				</Routes>
			</main>
		</>
	);
}

export default App;
