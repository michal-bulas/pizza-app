import { CollectionKeys } from '../../types/CollectionKeys';
import ActionLogo from './ActionLogo';
import IngredientLogo from './IngredientsLogo';
import PizzaLogo from './PizzaLogo';

interface LogoMapComponentProps {
	collection: CollectionKeys;
}
const LOGO_MAP: Record<CollectionKeys, React.FC<{ size?: number }>> = {
	pizzas: PizzaLogo,
	ingredients: IngredientLogo,
	actions: ActionLogo,
};

const LogoMapComponent: React.FC<LogoMapComponentProps> = ({ collection }) => {
	const Logo =
		LOGO_MAP[collection] || (() => <p className='text-center'>No Image</p>);
	return <Logo />;
};

export default LogoMapComponent;
