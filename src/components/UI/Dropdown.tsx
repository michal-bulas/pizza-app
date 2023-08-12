import { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown: React.FC<{
	listItems: string[];
	hidden: boolean;
	title: string;
}> = ({ listItems, hidden, title }) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	const hiddenClass = hidden ? 'sm:hidden' : '';
	return (
		<div
			className={`${hiddenClass} relative flex flex-col items-center rounded-lg`}
		>
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				className='bg-gray-200 py-2 px-5 flex  items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-gray-400 duration-300'
			>
				{title}&nbsp;
				{!isOpen ? '↓' : '↑'}
			</button>
			{isOpen && (
				<ul className='bg-gray-200 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full'>
					{listItems.map((item) => (
						<Link
							to={`/${item}`}
							className='w-full'
						>
							<li
								key={item}
								className='dd-item capitalize'
							>
								{item}
							</li>
						</Link>
					))}
				</ul>
			)}
		</div>
	);
};

export default Dropdown;
