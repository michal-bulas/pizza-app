import { Link } from 'react-router-dom';

const ErrorComponent: React.FC = () => {
	return (
		<div
			data-testid='ErrorComponentTestId'
			className='flex flex-col items-center justify-center mt-[30vh] space-y-4'
		>
			<p className='text-xl'>Oops! Page not found.</p>
			<Link to='/'>
				<div className='p-4 bg-yellow-400 rounded-lg text-xl font-semibold shadow-sm hover:shadow-lg hover:bg-yellow-500'>
					Go back to homepage
				</div>
			</Link>
		</div>
	);
};

export default ErrorComponent;
