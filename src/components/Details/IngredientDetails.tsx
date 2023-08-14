import { useParams } from 'react-router-dom';
import LoadingSpinner from '../UI/LoadingSpinner';
import { useDocument, useRelationByItem } from '../../hooks/fetchHooks';
import Card from '../UI/Card';
import IngredientLogo from '../Logo/IngredientsLogo';
import List from '../UI/List';
import ErrorComponent from '../ErrorComponent';

const IngredientDetails = () => {
	const { document = '' } = useParams<{
		document: string;
	}>();

	const { data, error, isLoading } = useDocument('ingredients', document);

	const {
		data: pizza,
		error: pizzaError,
		isLoading: pizzaIsLoading,
	} = useRelationByItem('pizzas', 'ingredient', document);

	if (isLoading || pizzaIsLoading) return <LoadingSpinner />;

	if (error || pizzaError) return <ErrorComponent />;

	return (
		<div className='px-10 md:px-14 lg:px-26 mt-10'>
			<Card className='flex flex-col md:flex-row md:justify-evenly items-center space-y-7'>
				<div>
					<h3 className='font-bold text-lg text-center mb-4'>
						{data.ingredient.name}
					</h3>
					<IngredientLogo />
				</div>
				<List
					list={[data.ingredient.action]}
					listName={'actions'}
				/>
				<List
					list={pizza.pizzas}
					listName={'pizzas'}
				/>
			</Card>
		</div>
	);
};

export default IngredientDetails;
