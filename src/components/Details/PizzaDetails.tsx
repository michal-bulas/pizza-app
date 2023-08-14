import { useParams } from 'react-router-dom';
import PizzaLogo from '../Logo/PizzaLogo';
import List from '../UI/List';
import LoadingSpinner from '../UI/LoadingSpinner';
import ErrorPage from '../ErrorComponent';
import { useDocument } from '../../hooks/fetchHooks';
import Card from '../UI/Card';

const PizzaDetails = () => {
	const { document = '' } = useParams<{
		document: string;
	}>();

	const { data, error, isLoading } = useDocument('pizzas', document);

	if (isLoading) return <LoadingSpinner />;

	if (error) return <ErrorPage />;

	return (
		<div className='px-10 md:px-14 lg:px-26 mt-10'>
			<Card className='flex flex-col md:flex-row md:justify-evenly items-center space-y-7'>
				<div>
					<h3 className='font-bold text-lg text-center mb-4'>
						{data.pizza.name}
					</h3>
					<PizzaLogo />
				</div>
				<List
					list={data.pizza.ingredient}
					listName={'ingredients'}
				/>
				<List
					list={data.pizza.action}
					listName={'actions'}
				/>
			</Card>
		</div>
	);
};

export default PizzaDetails;
