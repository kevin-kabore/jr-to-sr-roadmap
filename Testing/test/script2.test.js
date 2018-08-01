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

	// using mock functions (spies) instead of fetch to avoid long running asynchronous db calls
	it('getPeoplePromise returns count and results using mocks', () => {
		// doing promise.resolve resolves the promise faster than making the actual api request
		const mockFetch = jest.fn()
		  .mockReturnValue(Promise.resolve({ //Mock results of a resolved fetch promise
			json: () => Promise.resolve({  // json method is a Promise
				count: 87,
				results: [0,1,2,3,4,5]
			})
		}))
		  
		expect.assertions(4)
		return swapi.getPeoplePromise(mockFetch).then(data => {
			expect(mockFetch.mock.calls.length).toBe(1)
			expect(mockFetch).toBeCalledWith('https://swapi.co/api/people/')
			expect(data.count).toEqual(87);
			expect(data.results.length).toBeGreaterThan(5);
		})
	})
})


