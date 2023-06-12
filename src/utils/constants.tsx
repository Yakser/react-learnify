import {get_list_of_content_loaders} from './helpers';
import ContentLoader from 'react-content-loader';
import React from 'react';



export const LIST_CONTENT_LOADERS = get_list_of_content_loaders();
export const PAGINATION_CONTENT_LOADER = (
	<ContentLoader
		width={400}
		height={600}
		speed={2}
		viewBox="0 0 300 73"
		backgroundColor="#f3f3f3"
		foregroundColor="#ecebeb"
	>
		<rect x="0" y="0" rx="25" ry="25" width="300" height="73"/>
	</ContentLoader>
);
export const DEFAULT_TRANSITION_STYLES = {
	opacity: 0,
	transition: 'opacity 200ms ease-in-out',
};

export const TRANSITION_STYLES = {
	entering: {opacity: 0},
	entered: {opacity: 1},
	exiting: {opacity: 0},
	exited: {
		opacity: 0,
		display: 'none'
	},
	unmounted: {
		opacity: 0,
		display: 'none'
	},
};


export const PAGINATION_PAGES_COUNT = 7;
