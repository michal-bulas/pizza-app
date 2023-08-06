import { useScrollPosition } from '../hooks/useScrollPosition';
import Dropdown from './UI/Dropdown';
import Logo from './UI/Logo';

const Header = () => {
	const scrollPosition = useScrollPosition();
	const heightClass = scrollPosition > 120 ? 'h-[10vh]' : 'h-[15vh]';

	return (
		<header
			className={`${heightClass} w-full bg-white flex justify-between items-center px-4 fixed top-0 ease-linear duration-200 shadow-md`}
		>
			<div className='flex'>
				<Logo size={scrollPosition > 120 ? 7 : 9} />
				<h1 className='font-extrabold text-2xl self-center'>
					Lignumhard pizza
				</h1>
			</div>

			<Dropdown />
			<div className='hidden sm:flex font-bold space-x-3 '>
				<p>Pizzas</p>
				<p>Ingredients</p>
				<p>Actions</p>
			</div>
		</header>
	);
};

export default Header;
