import { useParams } from 'react-router-dom';
import Card from './UI/Card';
// import List from './UI/List';
import { useDocument } from '../hooks/fetchHooks';
import LoadingSpinner from './UI/LoadingSpinner';
import LogoMapComponent from './Logo/LogoMap';
import { CollectionKeys } from '../types/CollectionKeys';

const Details: React.FC = () => {
	const { collection = '', document = '' } = useParams<{
		collection: CollectionKeys;
		document: string;
	}>();

	const { data, isLoading } = useDocument(collection, document);
	console.log(data);
	if (isLoading) return <LoadingSpinner />;

	return (
		<div className='px-14 md:px-16 lg:px-20 mt-10'>
			<Card className='flex flex-col md:flex-row md:justify-evenly items-center space-y-7'>
				<div>
					<h3 className='font-bold text-lg text-center mb-4'>
						{data[collection.slice(0, -1)].name}
					</h3>
					{collection ? (
						<LogoMapComponent collection={collection} />
					) : (
						<p className='text-center'>No Image</p>
					)}
				</div>
				{/* <List
					list={list}
					listName={listName}
				/>
				<List
					list={list}
					listName={listName}
				/> */}
			</Card>
		</div>
	);
};

export default Details;
