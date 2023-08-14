import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Dropdown from '../Dropdown';

describe('Dropdown', () => {
	const renderWithRouter = (component: React.ReactElement) => {
		return render(<Router>{component}</Router>);
	};

	it('renders the dropdown button with provided title', () => {
		renderWithRouter(
			<Dropdown
				listItems={['test1']}
				hidden={false}
				title='Test Dropdown'
			/>
		);
		const button = screen.getByText(/Test Dropdown/i);
		expect(button).toBeDefined();
	});

	it('toggles the dropdown menu when the button is clicked', () => {
		renderWithRouter(
			<Dropdown
				listItems={['test1', 'test2']}
				hidden={false}
				title='Test Dropdown'
			/>
		);

		const button = screen.getByText(/Test Dropdown/i);

		let dropdownItems = screen.queryByTestId('dropdown-items');
		expect(dropdownItems).toBeNull();

		fireEvent.click(button);
		dropdownItems = screen.getByTestId('dropdown-items');
		expect(dropdownItems).toBeDefined();

		fireEvent.click(button);
		dropdownItems = screen.queryByTestId('dropdown-items');
		expect(dropdownItems).toBeNull();
	});

	it('renders items in the dropdown', () => {
		renderWithRouter(
			<Dropdown
				listItems={['test1', 'test2', 'test3']}
				hidden={false}
				title='Test Dropdown'
			/>
		);

		fireEvent.click(screen.getByText(/Test Dropdown/i));

		const testItem1 = screen.getByText('test1');
		const testItem2 = screen.getByText('test2');
		const testItem3 = screen.getByText('test3');

		expect(testItem1).toBeDefined();
		expect(testItem2).toBeDefined();
		expect(testItem3).toBeDefined();
	});

	it('does not render dropdown if hidden prop is true', () => {
		renderWithRouter(
			<Dropdown
				listItems={['test1']}
				hidden={true}
				title='Test Dropdown'
			/>
		);

		const dropdownItems = screen.queryByTestId('dropdown-items');
		expect(dropdownItems).toBeNull();
	});
});
