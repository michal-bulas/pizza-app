import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../Header';

describe('Header', () => {
	const renderWithRouter = (component: React.ReactElement) => {
		return render(<Router>{component}</Router>);
	};
	it('renders without crashing', () => {
		renderWithRouter(<Header />);
		const headerElement = screen.getByRole('banner');
		expect(headerElement).toBeTruthy();
	});

	it('renders the logo and title', () => {
		renderWithRouter(<Header />);

		const logo = screen.getByTestId('PizzaLogo');
		const title = screen.getByText('Lignumhard pizza');

		expect(logo).toBeTruthy();
		expect(title).toBeTruthy();
	});

	it('renders the navigation links', () => {
		renderWithRouter(<Header />);

		const pizzasLink = screen.getByText('Pizzas');
		const ingredientsLink = screen.getByText('Ingredients');
		const actionsLink = screen.getByText('Actions');

		expect(pizzasLink.getAttribute('href')).toBe('/pizzas');
		expect(ingredientsLink.getAttribute('href')).toBe('/ingredients');
		expect(actionsLink.getAttribute('href')).toBe('/actions');
	});
});
