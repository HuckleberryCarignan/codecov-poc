// eslint-disable-next-line no-console
console.log('Starting todos.js');
const { inspect } = require('util');

const fs = require('fs');

// add a todo item //	
let addTodo = (title) => {
	if (title !== '') {
		let todos = fetchTodos();
		let todo = {
			title
		};
		let duplicatetodos = todos.filter((todo) => todo.title === title);
		if (duplicatetodos.length === 0) {
			todos.push(todo);
			saveTodos(todos);
			return todo;
		}
	}
	else {
		// eslint-disable-next-line no-console
		console.log('Nothing to add');
		return;
	}

};

// delete a todo item //
let deleteTodo = (title) => {
	let todos = fetchTodos();
	let filteredtodos = todos.filter((todo) => todo.title !== title);
	saveTodos(filteredtodos);

	return todos.length !== filteredtodos.length;
};

// read a todo item //
let readTodo = (title) => {
	let todos = fetchTodos();
	if (todos !== '') {
		let filteredTodos = todos.filter((todo) => todo.title === title);
		return filteredTodos[0];
	}
	// eslint-disable-next-line no-console
	console.log('There are no items in the list');
	return;

};

// utility functions
let fetchTodos = () => {
	try {
		let todosString = fs.readFileSync('todos-data.json');
		return JSON.parse(todosString);
	}
	catch (e) {
		return [];
	}
};

let logTodo = (todo) => {
	// eslint-disable-next-line no-console
	console.log('------');
	// eslint-disable-next-line no-console
	console.log(`It's title is: ${todo.title}`);
};

let saveTodos = (todos) => {
	fs.writeFileSync('todos-data.json', JSON.stringify(todos));
};

// list all todo items //
let listTodos = () => {
	return fetchTodos();
};

// exported functions
module.exports = {
	addTodo,
	deleteTodo,
	readTodo,
	logTodo,
	listTodos
};