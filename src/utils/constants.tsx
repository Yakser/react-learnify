import {get_list_of_content_loaders} from './helpers';

export const API_URL: string = import.meta.env.VITE_API_URL;


export const LIST_CONTENT_LOADERS = get_list_of_content_loaders();

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
