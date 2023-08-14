import { render, screen } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ErrorComponent from '../ErrorComponent';

describe('ErrorComponent', () => {
	it('renders the error message correctly', () => {
		render(
			<Router>
				<ErrorComponent />
			</Router>
		);

		const errorMessage = screen.getByText('Oops! Page not found.');
		expect(errorMessage).not.toBeNull();
	});

	it('renders the link to the homepage', () => {
		render(
			<Router>
				<ErrorComponent />
			</Router>
		);

		const linkElement = screen.getByText('Go back to homepage').closest('a');
		expect(linkElement?.getAttribute('href')).toBe('/');
	});

	it('has the expected data-testid', () => {
		render(
			<Router>
				<ErrorComponent />
			</Router>
		);

		const errorComponent = screen.getByTestId('ErrorComponentTestId');
		expect(errorComponent).not.toBeNull();
	});
});
