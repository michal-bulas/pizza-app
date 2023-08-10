const List: React.FC<{ list: string[]; listName: string }> = ({
	list,
	listName,
}) => {
	return (
		<div className='flex flex-col items-center'>
			<h4 className='font-bold mb-2'>{listName}:</h4>
			<ul className='list-disc columns-2'>
				{list.map((item) => (
					<li
						key={item}
						className='ml-4'
					>
						{item}
					</li>
				))}
			</ul>
		</div>
	);
};

export default List;
