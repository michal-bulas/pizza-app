import { Link } from 'react-router-dom';
import { useScrollPosition } from '../hooks/useScrollPosition';
import Dropdown from './UI/Dropdown';
import PizzaLogo from './Logo/PizzaLogo';

const Header = () => {
	const scrollPosition = useScrollPosition();
	const heightClass = scrollPosition > 120 ? 'h-[10vh]' : 'h-[15vh]';

	return (
		<header
			role='banner'
			className={`${heightClass} w-full bg-white flex justify-between items-center px-2 sticky top-0 ease-linear duration-200 shadow-md mb-10`}
		>
			<Link
				to='/'
				className='flex mr-1'
			>
				<PizzaLogo size={scrollPosition > 120 ? 7 : 9} />
				<h1 className='font-extrabold text-2xl self-center'>
					Lignumhard pizza
				</h1>
			</Link>

			<nav>
				<Dropdown
					title='Menu'
					hidden={true}
					listItems={['pizzas', 'ingredients', 'actions']}
				/>
				<ul className='hidden sm:flex font-bold space-x-3 '>
					<li>
						<Link to='/pizzas'>Pizzas</Link>
					</li>
					<li>
						<Link to='/ingredients'>Ingredients</Link>
					</li>
					<li>
						<Link to='/actions'>Actions</Link>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default Header;
