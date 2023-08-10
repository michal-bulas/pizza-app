const LoadingSpinner = () => {
	return (
		<>
			<div className='mx-auto mt-[20vh] flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-tr from-red-600 to-yellow-600 animate-spin'>
				<div className='h-9 w-9 rounded-full bg-gray-200'></div>
			</div>
			<p className='text-center mt-4 font-bold text-2xl'>Loading...</p>
		</>
	);
};

export default LoadingSpinner;
