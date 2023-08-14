type ingredientPops = {
	action: string;
};
type pizzaProps = {
	action: string[];
	ingredients: string[];
};

export type DetailsListItemsProps = {
	_id: string;
	name: string;
	__v: number;
} & (ingredientPops | pizzaProps);
