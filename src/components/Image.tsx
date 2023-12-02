import React from 'react';
import { API_URL } from './../config.js';

interface Props {
	content: any;
}

const Image = ({ content }: Props) => {
	return (
		<img
			className="w-1/5"
			src={API_URL + content.attributes.Image.data[0].attributes.url}
			alt="peinture"
		/>
	);
};

export default Image;
