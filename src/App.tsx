import Header from './components/Header';
import Card from './components/UI/Card';
import Logo from './components/UI/Logo';

const pizzaList = [
	'Margherita',
	'Pepperoni Classic',
	'BBQ Chicken',
	'Veggie Delight',
	'Meat Feast',
	'Hawaiian',
	'Four Cheese Supreme',
	'Buffalo Ranch Chicken',
	'Mediterranean Olive',
	'Bacon and Mushroom',
	'Pesto Chicken',
	'Spinach and Ricotta',
	'Philly Cheesesteak',
	'Margherita with a Twist',
	'Spicy Sausage',
	'BBQ Bacon',
	'Garlic Shrimp',
	'Buffalo Cauliflower',
	'BBQ Veggie',
	'Supreme Deluxe',
];

function App() {
	return (
		<>
			<Header />
			<main className='max-w-screen-2xl mx-auto mt-5'>
				<div className='grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 mx-auto'>
					{pizzaList.map((pizza, index) => (
						<Card
							key={index}
							className='flex flex-col items-center hover:shadow-2xl hover:cursor-pointer space-y-6'
						>
							<Logo size={9} />
							<p className='text-lg'>{pizza}</p>
						</Card>
					))}
				</div>
			</main>
		</>
	);
}

export default App;
