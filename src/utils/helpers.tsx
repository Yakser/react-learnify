import React, {ReactElement} from 'react';
import ContentLoader from 'react-content-loader';

export const capitalize = (string: string): string => {
	return string.charAt(0).toUpperCase() + string.slice(1);
};

export const get_list_of_content_loaders = (count = 4) => {
	const content_loaders: ReactElement[] = [];
	for (let index = 0; index < count; index++) {
		content_loaders.push(
			<ContentLoader
				width={400}
				height={600}
				speed={2}
				viewBox="0 0 400 460"
				backgroundColor="#f3f3f3"
				foregroundColor="#ecebeb"
				key={index}
			>
				<rect x="0" y="0" rx="56" ry="56" width="400" height="400"/>
			</ContentLoader>
		);
	}
	return content_loaders;

};