import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

export const fetchCollection = async (collectionName: string) => {
	const { data } = await axios.get(
		`http://localhost:9090/${collectionName}/get`
	);
	return data;
};

export const fetchDocument = async (
	collectionName: string,
	documentId: string
) => {
	const { data } = await axios.get(
		`http://localhost:9090/${collectionName}/get/${documentId}`
	);
	return data;
};

export const fetchRelation = async (
	collectionName: string,
	itemType: string,
	itemId: string
) => {
	const { data } = await axios.get(
		`http://localhost:9090/${collectionName}/get/by-${itemType}/${itemId}`
	);
	return data;
};

export const useCollection = (collectionName: string) => {
	return useQuery({
		queryKey: ['collection', collectionName],
		queryFn: () => fetchCollection(collectionName),
	});
};

export const useDocument = (collectionName: string, documentId: string) => {
	return useQuery({
		queryKey: ['document', documentId],
		queryFn: () => fetchDocument(collectionName, documentId),
	});
};

export function useRelationByItem(
	collectionName: string,
	itemType: string,
	itemId: string
) {
	return useQuery({
		queryKey: ['relationByItem', collectionName, itemId],
		queryFn: () => fetchRelation(collectionName, itemType, itemId),
	});
}
