import getPolyfill from './polyfill.js';

export default getPolyfill;

export function then(resolve) {
	resolve(getPolyfill);
}
