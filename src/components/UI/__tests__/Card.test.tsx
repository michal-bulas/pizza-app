import { render, screen } from '@testing-library/react';
import Card from '../Card';

describe('Card', () => {
	it('merges additional classes passed in', () => {
		render(<Card className='bg-red-500'>Test content</Card>);

		const cardElement = screen.getByText('Test content');

		expect(cardElement.className).toContain('bg-red-500');
	});

	it('renders the children inside the card', () => {
		render(
			<Card>
				<span data-testid='child-element'>Child Content</span>
			</Card>
		);

		const childElement = screen.getByTestId('child-element');

		expect(childElement).toBeDefined();
		expect(childElement.textContent).toBe('Child Content');
	});
});
