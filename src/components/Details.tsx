import Card from './UI/Card';
import List from './UI/List';
import Logo from './UI/Logo';

const Details: React.FC<{ name: string; list: string[]; listName: string }> = ({
	name,
	list,
	listName,
}) => {
	return (
		<div className='px-14 md:px-16 lg:px-20 mt-10'>
			<Card className='flex flex-col md:flex-row md:justify-evenly items-center space-y-7'>
				<div>
					<h3 className='font-bold text-lg text-center mb-4'>{name}</h3>
					<Logo size={15} />
				</div>
				<List
					list={list}
					listName={listName}
				/>
				<List
					list={list}
					listName={listName}
				/>
			</Card>
		</div>
	);
};

export default Details;
