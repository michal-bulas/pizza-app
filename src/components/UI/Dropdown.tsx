import { useState } from 'react';

const Dropdown = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);
	return (
		<div className='relative flex flex-col items-center rounded-lg'>
			<button
				onClick={() => setIsOpen((prev) => !prev)}
				className='bg-gray-200 py-2 px-5 flex sm:hidden items-center justify-between font-bold text-lg rounded-lg tracking-wider border-4 border-transparent active:border-gray-400 duration-300'
			>
				Menu&nbsp;
				{!isOpen ? '↓' : '↑'}
			</button>
			{isOpen && (
				<div className='sm:hidden bg-gray-200 absolute top-20 flex flex-col items-start rounded-lg p-2 w-full'>
					<h2 className='dd-item'>Pizzas</h2>
					<h2 className='dd-item'>Ingredients</h2>
					<h2 className='dd-item'>Actions</h2>
				</div>
			)}
		</div>
	);
};

export default Dropdown;
