import { useDocument } from '../hooks/fetchHooks';
import Card from './UI/Card';
import LoadingSpinner from './UI/LoadingSpinner';
import Logo from './UI/Logo';

interface documentItem {
	_id: string;
	name: string;
	ingredient?: string[];
	action?: string[];
}

const ItemsGrid: React.FC<{
	documentName: string;
}> = ({ documentName }) => {
	const { data, isLoading } = useDocument(documentName);

	if (isLoading) return <LoadingSpinner />;

	return (
		<>
			<h2 className='text-center capitalize font-bold text-4xl my-4'>
				{documentName}
			</h2>
			<div className='grid grid-flow-row-dense gap-5 px-14 md:px-16 lg:px-20 md:grid-cols-2 lg:grid-cols-3 '>
				{data[documentName].map((item: documentItem) => (
					<Card
						key={item._id}
						className='flex flex-col items-center hover:shadow-2xl hover:cursor-pointer space-y-6'
					>
						<Logo size={9} />
						<p className='text-lg'>{item.name}</p>
					</Card>
				))}
			</div>
		</>
	);
};

export default ItemsGrid;
