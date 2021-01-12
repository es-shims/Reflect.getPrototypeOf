import getPrototypeOf from 'reflect.getprototypeof';
import * as Module from 'reflect.getprototypeof';
import test from 'tape';
import runTests from './tests.js';

test('as a function', (t) => {
	runTests(getPrototypeOf, t);

	t.end();
});

test('named exports', async (t) => {
	t.deepEqual(
		Object.keys(Module).sort(),
		['default', 'shim', 'getPolyfill', 'implementation'].sort(),
		'has expected named exports',
	);

	const { shim, getPolyfill, implementation } = Module;
	t.equal(await import('reflect.getprototypeof/shim'), shim, 'shim named export matches deep export');
	t.equal(await import('reflect.getprototypeof/implementation'), implementation, 'implementation named export matches deep export');
	t.equal(await import('reflect.getprototypeof/polyfill'), getPolyfill, 'getPolyfill named export matches deep export');

	t.end();
});
