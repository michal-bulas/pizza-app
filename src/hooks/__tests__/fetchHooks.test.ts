import axios from 'axios';
import { useQuery } from '@tanstack/react-query';
import {
	fetchCollection,
	fetchDocument,
	fetchRelation,
	useCollection,
	useDocument,
	useRelationByItem,
} from '../fetchHooks';

jest.mock('axios');
jest.mock('@tanstack/react-query');

describe('Data Fetching Functions', () => {
	afterEach(() => {
		jest.clearAllMocks();
	});

	it('fetches a collection', async () => {
		const mockData = { data: 'mockData' };
		(axios.get as jest.Mock).mockResolvedValue(mockData);

		const result = await fetchCollection('testCollection');

		expect(axios.get).toHaveBeenCalledWith(
			'http://localhost:9090/testCollection/get'
		);
		expect(result).toEqual('mockData');
	});

	it('fetches a document', async () => {
		const mockData = { data: 'mockData' };
		(axios.get as jest.Mock).mockResolvedValue(mockData);

		const result = await fetchDocument('testCollection', 'testId');

		expect(axios.get).toHaveBeenCalledWith(
			'http://localhost:9090/testCollection/get/testId'
		);
		expect(result).toEqual('mockData');
	});

	it('fetches a relation', async () => {
		const mockData = { data: 'mockData' };
		(axios.get as jest.Mock).mockResolvedValue(mockData);

		const result = await fetchRelation('testCollection', 'testType', 'testId');

		expect(axios.get).toHaveBeenCalledWith(
			'http://localhost:9090/testCollection/get/by-testType/testId'
		);
		expect(result).toEqual('mockData');
	});
});

describe('React Query Hooks', () => {
	it('uses collection', () => {
		useCollection('testCollection');

		expect(useQuery).toHaveBeenCalledWith({
			queryKey: ['collection', 'testCollection'],
			queryFn: expect.any(Function),
		});
	});

	it('uses document', () => {
		useDocument('testCollection', 'testId');

		expect(useQuery).toHaveBeenCalledWith({
			queryKey: ['document', 'testId'],
			queryFn: expect.any(Function),
		});
	});

	it('uses relation by item', () => {
		useRelationByItem('testCollection', 'testType', 'testId');

		expect(useQuery).toHaveBeenCalledWith({
			queryKey: ['relationByItem', 'testCollection', 'testId'],
			queryFn: expect.any(Function),
		});
	});
});
