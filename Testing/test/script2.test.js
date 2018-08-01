const fetch = require('node-fetch');
const swapi = require('./script2');

// for async tests, ALWAYS use expect assertions 
// Can either return the promise
// OR pass in the done method into the it callback function and call it after the assertion
describe('Api', () => {
	it('calls swapi to get people', () => {
		expect.assertions(1);
		return swapi.getPeopleAsync(fetch).then(data => {
			expect(data.count).toEqual(87);
			// done();
		})
	})

	it('calls swapi to get people with a Promise', (done) => {
		expect.assertions(2);
		swapi.getPeoplePromise(fetch).then(data => {
			expect(data.count).toEqual(87);
			expect(data.results.length).toBeGreaterThan(5);
			done();
		})
	})
})