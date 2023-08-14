import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useDocument, useRelationByItem } from '../../hooks/fetchHooks';
import Card from '../UI/Card';
import List from '../UI/List';
import ActionLogo from '../Logo/ActionLogo';
import ErrorComponent from '../ErrorComponent';

const ActionDetails = () => {
	const { document = '' } = useParams<{
		document: string;
	}>();

	const { data, error, isLoading } = useDocument('actions', document);

	const {
		data: pizza,
		error: pizzaError,
		isLoading: pizzaIsLoading,
	} = useRelationByItem('pizzas', 'action', document);

	const {
		data: ingredient,
		error: ingredientError,
		isLoading: ingredientIsLoading,
	} = useRelationByItem('ingredients', 'action', document);

	if (isLoading || pizzaIsLoading || ingredientIsLoading)
		return <LoadingSpinner />;

	if (error || pizzaError || ingredientError) return <ErrorComponent />;

	return (
		<div className='px-10 md:px-14 lg:px-26 mt-10'>
			<Card className='flex flex-col md:flex-row md:justify-evenly items-center space-y-7'>
				<div>
					<h3 className='font-bold text-lg text-center mb-4'>
						{data.action.name}
					</h3>
					<ActionLogo />
				</div>
				<List
					list={ingredient.ingredients}
					listName={'ingredients'}
				/>
				<List
					list={pizza.pizzas}
					listName={'pizzas'}
				/>
			</Card>
		</div>
	);
};

export default ActionDetails;
