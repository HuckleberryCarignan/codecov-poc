/* eslint no-console: "error"*/

console.log('Running app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');
const todos = require('./todos.js');

const argv = yargs.argv;
let command = argv._[0];

// eslint-disable-next-line no-console
console.log('Running Command: ', command);

if (command === 'addTodo') {
	todos.addTodo(argv.title);
}
else if (command === 'deleteTodo') {
	let todoDeleted = todos.deleteTodo(argv.title);
	let message = todoDeleted ? 'Todo was deleted' : 'Todo not found';
	// eslint-disable-next-line no-console
	console.log(message);
}
else if (command === 'readTodo') {
	let todo = todos.readTodo(argv.title);
	if (todo) {
		// eslint-disable-next-line no-console
		console.log('Great! The todo was found.');
		todos.logTodo(todo);
	}
	else {
		// eslint-disable-next-line no-console
		console.log('Whoops! The todo was not found.');
	}
}
else if (command === 'listTodos') {
	let allTodos = todos.listTodos();
	// eslint-disable-next-line no-console
	console.log(`Printing ${allTodos.length} todo(s).`);
	allTodos.forEach((todo) => todos.logTodo(todo));
}
else {
	// eslint-disable-next-line no-console
	console.log('Invalid command.');
}