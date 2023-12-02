import React from 'react';

const Loader = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="border-t-4 border-orange-500 border-solid rounded-full h-12 w-12 border-l-4 animate-spin"></div>
		</div>
	);
};

export default Loader;
