import { render } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router-dom';
import ItemsGrid from '..//ItemsGrid';
import { useParams } from 'react-router-dom';
import { useCollection } from '../../hooks/fetchHooks';

jest.mock('react-router-dom', () => ({
	...jest.requireActual('react-router-dom'),
	useParams: jest.fn().mockReturnValue({ collection: 'pizzas' }),
}));

jest.mock('../../hooks/fetchHooks', () => ({
	useCollection: jest.fn(),
}));

describe('ItemsGrid', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('should display LoadingSpinner while loading', () => {
		(useCollection as jest.Mock).mockReturnValue({
			isLoading: true,
		});

		const { queryByTestId } = render(
			<Router>
				<ItemsGrid />
			</Router>
		);

		expect(queryByTestId('LoadingSpinnerTestId')).toBeTruthy();
	});

	it('should display ErrorComponent when error occurs', () => {
		(useCollection as jest.Mock).mockReturnValue({
			error: true,
		});

		const { queryByTestId } = render(
			<Router>
				<ItemsGrid />
			</Router>
		);

		expect(queryByTestId('ErrorComponentTestId')).toBeTruthy();
	});

	it('renders items properly', () => {
		(useCollection as jest.Mock).mockReturnValue({
			data: {
				pizzas: [
					{ _id: '1', name: 'Pizza 1' },
					{ _id: '2', name: 'Pizza 2' },
				],
			},
			error: false,
			isLoading: false,
		});

		(useParams as jest.Mock).mockReturnValue({ collection: 'pizzas' });

		const { getByText } = render(
			<Router>
				<ItemsGrid />
			</Router>
		);

		expect(getByText('Pizza 1')).toBeTruthy();
		expect(getByText('Pizza 2')).toBeTruthy();
	});
	it('should display the correct header based on collection name', () => {
		(useParams as jest.Mock).mockReturnValue({ collection: 'actions' });
		(useCollection as jest.Mock).mockReturnValue({
			data: { actions: [] },
			error: false,
			isLoading: false,
		});

		const { getByText } = render(
			<Router>
				<ItemsGrid />
			</Router>
		);
		expect(getByText('actions')).toBeTruthy();
	});

	it('renders no items if data is empty', () => {
		(useParams as jest.Mock).mockReturnValue({ collection: 'pizzas' });
		(useCollection as jest.Mock).mockReturnValue({
			data: { pizzas: [] },
			error: false,
			isLoading: false,
		});

		const { queryByTestId } = render(
			<Router>
				<ItemsGrid />
			</Router>
		);

		expect(queryByTestId('item-card')).toBeNull();
	});

	it('renders items with correct links', () => {
		const testItems = [
			{ _id: '1', name: 'Pizza 1' },
			{ _id: '2', name: 'Pizza 2' },
		];

		(useParams as jest.Mock).mockReturnValue({ collection: 'pizzas' });
		(useCollection as jest.Mock).mockReturnValue({
			data: { pizzas: testItems },
			error: false,
			isLoading: false,
		});

		const { getAllByTestId } = render(
			<Router>
				<ItemsGrid />
			</Router>
		);

		const itemLinks = getAllByTestId('item-link');

		testItems.forEach((item, index) => {
			expect(itemLinks[index].getAttribute('href')).toBe(`/pizzas/${item._id}`);
		});
	});
});
