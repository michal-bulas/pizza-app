import { render } from '@testing-library/react';
import LogoMapComponent from '../LogoMapComponent';
import { CollectionKeys } from '../../../types/CollectionKeys';

describe('LogoMapComponent', () => {
	it('should render the PizzaLogo when collection is "pizzas"', () => {
		const { queryByTestId } = render(<LogoMapComponent collection='pizzas' />);
		expect(queryByTestId('PizzaLogo')).toBeTruthy();
	});

	it('should render the IngredientLogo when collection is "ingredients"', () => {
		const { queryByTestId } = render(
			<LogoMapComponent collection='ingredients' />
		);
		expect(queryByTestId('IngredientLogo')).toBeTruthy();
	});

	it('should render the ActionLogo when collection is "actions"', () => {
		const { queryByTestId } = render(<LogoMapComponent collection='actions' />);
		expect(queryByTestId('ActionLogo')).toBeTruthy();
	});

	it('should render the default "No Image" text for unknown collections', () => {
		const { getByText } = render(
			<LogoMapComponent collection={'unknown' as CollectionKeys} />
		);
		expect(getByText('No Image')).toBeTruthy();
	});
});
