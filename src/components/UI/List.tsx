import { Link } from 'react-router-dom';
import { DetailsListItemsProps } from '../../types/DetailsListItemsProps';

const List: React.FC<{ list: DetailsListItemsProps[]; listName: string }> = ({
	list,
	listName,
}) => {
	return (
		<div className='flex flex-col items-center'>
			{list[0] ? (
				<>
					<h4 className='font-bold mb-2 capitalize'>{listName}:</h4>
					<ul className='list-disc columns-2'>
						{list.map((item) => (
							<Link to={`/${listName}/${item._id}`}>
								<li
									key={item._id}
									className='ml-4'
								>
									{item.name}
								</li>
							</Link>
						))}
					</ul>
				</>
			) : (
				<h4 className='font-bold mb-2 capitalize'>No {listName} related</h4>
			)}
		</div>
	);
};

export default List;
