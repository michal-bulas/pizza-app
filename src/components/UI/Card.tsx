import React from 'react';
import { twMerge } from 'tailwind-merge';

const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({
	children,
	className = '',
}) => {
	const c = twMerge('p-6 m-5 shadow-md rounded-xl bg-white', className);
	return <div className={c}>{children}</div>;
};

export default Card;
