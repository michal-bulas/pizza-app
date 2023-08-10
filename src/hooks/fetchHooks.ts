import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const fetchDocument = async (documentName: string) => {
	const { data } = await axios.get(`http://localhost:9090/${documentName}/get`);
	return data;
};

export const useDocument = (documentName: string) => {
	return useQuery({
		queryKey: ['list', documentName],
		queryFn: () => fetchDocument(documentName),
	});
};
