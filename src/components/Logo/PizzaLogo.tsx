const PizzaLogo: React.FC<{ size?: number }> = ({ size = 9 }) => {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width={`${size * 8}pt`}
			height={`${size * 8}pt`}
			style={{ transition: 'all 0.2s linear' }}
			version='1.1'
			viewBox='0 0 512 512'
			xmlSpace='preserve'
		>
			<path
				fill='#F6A230'
				d='M156.663 290.735l99.217 203.89L448.613 98.557c-128.49-45.303-266.385-41.985-385.468 0l84.644 173.941'
			></path>
			<path
				fill='#C66500'
				d='M475.801 43.154c-13.591-3.706-29.279-.727-42.828-4.481-14.487-4.015-27.1-15.875-41.835-18.889-14.71-3.008-30.968 2.944-45.892.938-14.863-1.996-28.968-12.035-44.013-13.036-14.946-.99-30.26 7.09-45.353 7.09h.211c-15.093 0-30.407-8.081-45.353-7.09-15.045 1.001-29.15 11.04-44.013 13.036-14.924 2.006-31.183-3.945-45.892-.938-14.736 3.014-27.348 14.873-41.836 18.889-13.547 3.754-29.237.774-42.827 4.481l26.965 55.409.011-.008c119.084-41.985 256.978-45.303 385.468 0l27.187-55.401z'
			></path>
			<g fill='#D53349'>
				<circle
					cx='186.444'
					cy='153.661'
					r='46.631'
				></circle>
				<circle
					cx='255.874'
					cy='323.866'
					r='35.432'
				></circle>
			</g>
			<path
				fill='#FFE285'
				d='M286.552 179.256l-19.005 19.004c-9.793 9.794-9.793 25.673 0 35.466 5.468 5.467 14.333 5.467 19.801-.001l5.115-5.116 19.359 19.358 24.436-24.438-19.358-19.355 5.116-5.117c5.468-5.467 5.469-14.332 0-19.8-9.793-9.794-25.671-9.794-35.464-.001z'
			></path>
			<g fill='#53180F'>
				<path d='M324.836 93.529c-24.842-3.211-48.617-4.909-68.755-4.909v15.206c19.497 0 42.598 1.654 66.805 4.785l1.95-15.082z'></path>
				<path d='M486.682 38.242l-8.88-2.422c-7.658-2.089-15.536-2.291-23.157-2.486-7.068-.182-13.744-.353-19.641-1.987-5.907-1.637-11.722-4.929-17.88-8.414-7.608-4.306-15.475-8.759-24.463-10.596-3.358-.687-6.933-1.021-10.929-1.021-5.302 0-10.577.59-15.677 1.159-4.909.549-9.546 1.067-14.015 1.067-2.114 0-4.004-.116-5.783-.356-6.055-.813-12.26-3.282-18.828-5.898C319.307 4.054 310.907.71 301.736.101A47.012 47.012 0 00298.638 0c-7.987 0-15.698 1.935-23.154 3.807-6.863 1.722-13.346 3.349-19.499 3.368-6.153-.018-12.636-1.645-19.499-3.368C229.029 1.935 221.318 0 213.331 0c-1.045 0-2.087.033-3.099.101-9.169.61-17.569 3.954-25.692 7.188-6.568 2.615-12.773 5.086-18.83 5.898-1.777.239-3.669.356-5.782.356-4.469 0-9.105-.518-14.015-1.067-5.1-.569-10.373-1.159-15.676-1.159-3.996 0-7.572.334-10.929 1.021-8.989 1.839-16.855 6.29-24.463 10.596-6.157 3.485-11.973 6.777-17.879 8.414-5.897 1.634-12.573 1.804-19.641 1.987-7.62.195-15.499.397-23.157 2.486l-8.85 2.414 30.979 63.658 3.894 7.971 80.76 165.962 13.673-6.654-80.882-166.215c.229-.077.459-.152.689-.23a560.693 560.693 0 019.884-3.207c.205-.064.41-.126.614-.191a563.47 563.47 0 0121.341-6.215 559.604 559.604 0 0110.538-2.731l.55-.139a560.868 560.868 0 0110.399-2.475l.703-.161a572.419 572.419 0 0121.608-4.463l.602-.11a571.843 571.843 0 0110.697-1.878l.363-.06a576.092 576.092 0 0155.997-6.427l.477-.031c3.568-.232 7.143-.427 10.722-.592l.929-.044c3.47-.155 6.946-.277 10.425-.371l1.255-.032a588.485 588.485 0 0112.643-.176c1.033-.004 2.065-.006 3.096-.004.978.002 1.956.009 2.934.016 1.039.007 2.079.015 3.117.027.962.012 1.923.028 2.884.046 1.052.018 2.103.035 3.155.06.952.021 1.904.049 2.855.075 1.053.028 2.106.058 3.158.092.957.031 1.914.068 2.871.105 1.043.04 2.087.079 3.129.124.969.043 1.936.09 2.904.137 1.027.05 2.054.099 3.081.153.991.054 1.981.113 2.971.171 1.001.06 2.002.116 3.003.18 1.025.065 2.049.139 3.072.21.962.067 1.924.131 2.885.202 1.069.079 2.138.166 3.205.252.917.073 1.835.144 2.751.222 1.121.095 2.241.199 3.362.3.86.078 1.719.152 2.579.234 1.208.116 2.416.239 3.623.362.768.078 1.537.152 2.304.233 1.335.142 2.668.292 4 .443.641.072 1.281.141 1.921.215 1.509.175 3.018.361 4.525.549.464.058.93.11 1.394.17 1.857.235 3.714.482 5.569.735.112.016.223.029.335.046a568.016 568.016 0 0129.691 4.885l.816.16c1.679.324 3.355.655 5.031.993.409.082.817.169 1.225.253 1.538.316 3.074.634 4.608.961.498.106.993.218 1.491.325 1.444.313 2.887.626 4.329.951.562.126 1.121.257 1.683.385 1.373.313 2.745.628 4.117.952.618.144 1.235.296 1.853.444 1.311.313 2.62.629 3.929.952.668.164 1.335.335 2.003.503 1.253.314 2.506.63 3.756.953.711.183 1.419.371 2.129.558 1.209.317 2.419.636 3.626.961.738.198 1.475.401 2.213.604 1.173.32 2.346.644 3.517.972.772.217 1.544.439 2.316.658 1.131.322 2.263.647 3.391.976.803.235 1.604.473 2.406.712 1.097.325 2.195.653 3.291.985.826.25 1.652.506 2.479.761 1.065.328 2.132.659 3.195.993.848.268 1.697.538 2.544.811 1.04.333 2.08.667 3.118 1.007.866.283 1.73.57 2.595.857.602.2 1.204.402 1.806.605l-6.621 13.604c-24.815-8.12-54.46-15.04-86.27-20.105l-2.391 15.016c30.186 4.807 58.295 11.302 81.943 18.896l-168.8 346.879-92.38-189.841-13.673 6.653L255.879 512l199.575-410.128 31.228-63.63zM57.715 48.535c7.676-.197 15.612-.401 23.313-2.534 7.707-2.136 14.622-6.05 21.309-9.834 6.883-3.896 13.384-7.576 20.019-8.933 2.344-.479 4.922-.712 7.883-.712 4.455 0 9.085.518 13.987 1.065 5.107.571 10.389 1.162 15.705 1.162 2.799 0 5.352-.16 7.807-.49 7.914-1.063 15.293-4 22.43-6.842 7.353-2.928 14.298-5.692 21.074-6.144.676-.045 1.38-.067 2.091-.067 6.108 0 12.59 1.626 19.452 3.349 7.428 1.864 15.108 3.791 23.095 3.825h.211c7.988-.033 15.668-1.962 23.095-3.825 6.863-1.722 13.345-3.349 19.452-3.349.712 0 1.415.023 2.089.067 6.78.451 13.725 3.217 21.077 6.144 7.137 2.841 14.515 5.778 22.428 6.842 2.456.329 5.011.49 7.809.49 5.316 0 10.596-.59 15.703-1.162 4.902-.547 9.533-1.065 13.988-1.065 2.961 0 5.54.232 7.883.712 6.635 1.357 13.137 5.037 20.02 8.933 6.687 3.784 13.601 7.698 21.309 9.834 7.699 2.133 15.636 2.338 23.312 2.534 3.52.09 6.941.177 10.218.444l-19.725 40.193a553.034 553.034 0 00-4.66-1.555c-.32-.105-.64-.216-.96-.32a559.615 559.615 0 00-5.886-1.897c-.468-.148-.939-.291-1.408-.438a526.58 526.58 0 00-4.475-1.389c-.686-.21-1.376-.412-2.062-.618-1.281-.385-2.563-.771-3.846-1.148-.754-.222-1.51-.437-2.266-.655-1.22-.353-2.438-.705-3.66-1.049-.795-.224-1.591-.442-2.385-.661-1.184-.328-2.367-.656-3.552-.976-.818-.222-1.637-.438-2.455-.655a725.39 725.39 0 00-3.511-.924c-.825-.214-1.652-.423-2.48-.634a716.204 716.204 0 00-3.5-.881 568.19 568.19 0 00-2.5-.611 511.644 511.644 0 00-5.997-1.423 533.764 533.764 0 00-6-1.358 682.065 682.065 0 00-6.009-1.293 575.15 575.15 0 00-3.693-.76c-.779-.158-1.557-.316-2.337-.47a603.18 603.18 0 00-3.789-.738 445.198 445.198 0 00-6.161-1.148c-.717-.129-1.431-.261-2.148-.386a698.59 698.59 0 00-4.091-.706c-.657-.11-1.313-.224-1.97-.333a594.635 594.635 0 00-4.377-.706c-.567-.09-1.132-.182-1.699-.271a609.48 609.48 0 00-4.822-.725c-.424-.062-.846-.127-1.27-.189a576.227 576.227 0 00-5.711-.794l-.39-.055a587.528 587.528 0 00-24.991-2.794l-.89-.077a621.06 621.06 0 00-5.288-.446c-.456-.038-.913-.069-1.37-.105a642.457 642.457 0 00-4.819-.356c-.551-.039-1.105-.072-1.657-.109-1.511-.1-3.024-.197-4.538-.285-.62-.036-1.242-.069-1.862-.104a626 626 0 00-4.336-.227c-.677-.033-1.354-.063-2.03-.093a580.017 580.017 0 00-10.367-.375c-.77-.021-1.541-.04-2.311-.059a626.721 626.721 0 00-3.882-.078c-.818-.015-1.636-.026-2.454-.038a574.453 574.453 0 00-3.715-.035c-.875-.006-1.751-.011-2.627-.013-.486-.002-.97-.008-1.456-.008-.692 0-1.383.008-2.074.01-.568.002-1.135-.002-1.703.002-.366.002-.731.01-1.097.013-1.126.009-2.253.022-3.379.039-.879.012-1.757.024-2.635.04-1.239.021-2.476.051-3.713.08-.769.018-1.54.036-2.309.059-1.341.038-2.681.081-4.02.128-.67.022-1.341.046-2.011.07a680.26 680.26 0 00-4.3.182c-.579.025-1.159.051-1.737.078-1.526.073-3.05.154-4.574.239l-1.461.081c-1.614.094-3.226.196-4.838.303l-1.199.079c-1.702.116-3.403.241-5.102.372l-.93.07c-1.784.141-3.567.29-5.349.446l-.687.059c-1.86.166-3.719.341-5.576.524-.153.015-.307.028-.46.045a559.71 559.71 0 00-5.793.604l-.238.024c-2.004.22-4.006.449-6.006.689l-.021.003a582.822 582.822 0 00-89.469 17.894l-.228.065a592.55 592.55 0 00-5.536 1.6c-.519.152-1.035.311-1.554.465-1.4.416-2.801.832-4.198 1.26-.739.226-1.476.459-2.215.688-1.175.364-2.35.727-3.523 1.099-.847.269-1.692.544-2.538.818-1.065.343-2.132.683-3.196 1.034-.9.295-1.798.6-2.698.9-.899.3-1.8.596-2.7.901L47.46 48.982c3.29-.268 6.722-.357 10.255-.447z'></path>
				<path d='M186.446 99.429c-29.905 0-54.234 24.329-54.234 54.234s24.329 54.234 54.234 54.234 54.234-24.329 54.234-54.234-24.329-54.234-54.234-54.234zm0 93.263c-21.52 0-39.028-17.508-39.028-39.028s17.508-39.028 39.028-39.028 39.028 17.509 39.028 39.028-17.507 39.028-39.028 39.028zM212.845 323.864c0 23.729 19.305 43.035 43.035 43.035s43.035-19.305 43.035-43.035-19.305-43.035-43.035-43.035c-23.73.001-43.035 19.306-43.035 43.035zm43.034-27.828c15.345 0 27.829 12.484 27.829 27.829s-12.484 27.829-27.829 27.829-27.829-12.484-27.829-27.829c.001-15.344 12.485-27.829 27.829-27.829zM262.171 239.104a21.464 21.464 0 0015.275 6.326 21.457 21.457 0 0015.014-6.069l19.361 19.36 35.188-35.191-19.36-19.359c8.165-8.443 8.078-21.954-.257-30.29-6.173-6.174-14.38-9.573-23.108-9.573-8.729 0-16.936 3.4-23.109 9.572l-19.006 19.005c-12.74 12.742-12.74 33.476.002 46.219zm10.751-35.467l19.005-19.004c3.301-3.302 7.689-5.119 12.356-5.119s9.056 1.818 12.355 5.119a6.406 6.406 0 010 9.049l-10.492 10.494 19.358 19.355-13.685 13.686-19.359-19.358-10.491 10.492a6.358 6.358 0 01-4.525 1.874 6.355 6.355 0 01-4.523-1.872c-6.812-6.815-6.812-17.902.001-24.716z'></path>
			</g>
		</svg>
	);
};

export default PizzaLogo;