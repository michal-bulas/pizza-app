const ActionLogo: React.FC<{ size?: number }> = ({ size = 9 }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			version='1.1'
			width={`${size * 8}pt`}
			height={`${size * 8}pt`}
			viewBox='0 0 512 512'
			xmlSpace='preserve'
		>
			<path d='M163.228 172.542a14.397 14.397 0 01-11.46-5.654c-12.233-15.974-8.948-36.645 8.372-52.66 5.243-4.847 5.372-9.862 4.556-13.217-.887-3.668-2.647-6.649-8.356-9.321-7.214-3.375-10.327-11.961-6.95-19.175 3.375-7.214 11.958-10.328 19.176-6.952 12.894 6.033 21.024 15.673 24.165 28.65 3.622 14.907-1.239 30.312-13.008 41.192-6.111 5.651-7.811 10.342-5.054 13.942 4.842 6.324 3.642 15.377-2.681 20.22a14.35 14.35 0 01-8.76 2.975zM229.76 174.617a14.388 14.388 0 01-10.814-4.873c-11.776-13.329-9.248-31.939 6.291-46.306 1.46-1.349 3.291-3.581 2.367-7.387-.588-2.436-1.387-3.769-4.563-5.256-7.214-3.376-10.327-11.961-6.95-19.176 3.375-7.214 11.956-10.327 19.176-6.95 10.789 5.049 17.645 13.321 20.372 24.583 3.148 12.966-.894 26.19-10.817 35.366-2.815 2.603-4.082 4.905-4.374 5.89.032.04.072.087.117.138 5.273 5.969 4.71 15.083-1.259 20.357a14.384 14.384 0 01-9.546 3.614zm10.508-24.361zM99.965 174.619c-4.699 0-9.303-2.29-12.073-6.512-9.64-14.692-6.82-31.391 7.542-44.669 1.46-1.349 3.291-3.581 2.367-7.387-.588-2.436-1.387-3.769-4.563-5.256-7.214-3.376-10.327-11.961-6.95-19.176 3.375-7.214 11.956-10.327 19.176-6.95 10.79 5.049 17.645 13.321 20.372 24.583 3.148 12.966-.894 26.19-10.817 35.366-5.003 4.625-4.077 6.034-3.007 7.666 4.369 6.66 2.512 15.601-4.148 19.971a14.38 14.38 0 01-7.899 2.364z'></path>
			<path
				fill='#B5DDF8'
				d='M217.665 433.376H113.802c-54.886 0-99.38-44.494-99.38-99.38V215.847h302.622v118.149c.001 54.887-44.493 99.38-99.379 99.38z'
			></path>
			<path
				fill='#509ED9'
				d='M317.051 252.394H375.948V311.291H317.051z'
			></path>
			<path
				fill='#074761'
				d='M468.13 311.291h-92.186v-58.897h92.186c16.264 0 29.448 13.185 29.448 29.448-.001 16.264-13.186 29.449-29.448 29.449z'
			></path>
			<path d='M468.13 237.971H331.468v-22.124c0-7.966-6.458-14.423-14.423-14.423H14.423C6.458 201.424 0 207.881 0 215.847v118.149c0 62.751 51.051 113.802 113.802 113.802h103.862c62.751 0 113.802-51.051 113.802-113.802v-8.283h136.662c24.189 0 43.87-19.681 43.87-43.87s-19.679-43.872-43.868-43.872zm-165.508 96.025c0 46.846-38.112 84.957-84.957 84.957H113.802c-46.846 0-84.957-38.112-84.957-84.957V230.269h273.777v37.754H116.107c-7.964 0-14.423 6.457-14.423 14.423s6.458 14.423 14.423 14.423h186.515v37.127zm28.845-67.18h30.052v30.052h-30.052v-30.052zm136.663 30.052h-77.765v-30.052h77.765c8.284 0 15.025 6.741 15.025 15.025 0 8.285-6.741 15.027-15.025 15.027z'></path>
			<path d='M72.834 296.874a14.639 14.639 0 01-8.003-2.437 13.773 13.773 0 01-2.194-1.788 14.46 14.46 0 01-3.115-4.687 14.56 14.56 0 01-.821-2.697 14.095 14.095 0 01-.288-2.812c0-.952.1-1.889.288-2.827.187-.923.46-1.832.821-2.697a15.47 15.47 0 011.327-2.495 15.237 15.237 0 011.788-2.192 14.533 14.533 0 014.688-3.115 14.533 14.533 0 012.697-.822 14.273 14.273 0 015.639 0c.923.188 1.832.462 2.697.822a14.632 14.632 0 014.673 3.115 15.145 15.145 0 011.803 2.192c.519.793.968 1.63 1.328 2.495.361.865.633 1.774.821 2.697.187.937.274 1.875.274 2.827a14.303 14.303 0 01-1.095 5.509 14.837 14.837 0 01-1.328 2.495 15.255 15.255 0 01-1.803 2.192 13.802 13.802 0 01-2.192 1.788c-.779.519-1.615.966-2.481 1.327-.867.361-1.774.635-2.697.822-.938.187-1.875.288-2.827.288z'></path>
		</svg>
	);
};

export default ActionLogo;
