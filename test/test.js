const { expect } = require('chai');
const { addTodo } = require('../todos.js');
const rn = require('random-number');
const { describe, it } = require('mocha');

describe('Add to Todos test', function() {
	it('should add an string to the to-do list when passed a string', function() {
		// Test set up
		let randomNumber = Math.round(rn() * 100000000);
		let stringToAdd = `item${  randomNumber  } to add`;
		let expectedReturn = stringToAdd;

		// Check item in Test
		expect(addTodo(stringToAdd).title).to.equal(expectedReturn);
	});
});