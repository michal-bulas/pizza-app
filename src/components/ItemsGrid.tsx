import { Link, useParams } from 'react-router-dom';
import { useCollection } from '../hooks/fetchHooks';
import Card from './UI/Card';
import LoadingSpinner from './UI/LoadingSpinner';
import LogoMapComponent from './Logo/LogoMapComponent';
import { CollectionKeys } from '../types/CollectionKeys';
import ErrorComponent from './ErrorComponent';

interface collectionItem {
	_id: string;
	name: string;
	ingredient?: string[];
	action?: string[];
}

const ItemsGrid: React.FC = () => {
	const { collection = 'pizzas' } = useParams<{ collection: CollectionKeys }>();
	const { data, error, isLoading } = useCollection(collection);

	if (isLoading) return <LoadingSpinner />;

	if (error) return <ErrorComponent />;

	return (
		<>
			<h2 className='text-center capitalize font-bold text-4xl my-4'>
				{collection}
			</h2>
			<div className='grid grid-flow-row-dense gap-5 px-14 md:px-16 lg:px-20 md:grid-cols-2 lg:grid-cols-3 '>
				{data[collection].map((item: collectionItem) => (
					<Link
						data-testid='item-link'
						key={item._id}
						to={`/${collection}/${item._id}`}
					>
						<Card
							data-testid='item-card'
							className='flex flex-col items-center hover:shadow-2xl hover:cursor-pointer space-y-6'
						>
							<LogoMapComponent collection={collection} />

							<p className='text-lg'>{item.name}</p>
						</Card>
					</Link>
				))}
			</div>
		</>
	);
};

export default ItemsGrid;
