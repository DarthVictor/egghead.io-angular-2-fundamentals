import {Component} from 'angular2/core';
import {TodoService} from './todo-service';

@Component({
	selector: 'todo-input',
	template: `<div>
	<input type="text" #myInput>
	<button (mouseover)="onClick(myInput.value)">Click me</button>
	</div>`
})
export class TodoInput {
	
	constructor(public todoService: TodoService) {
		console.log(todoService)
	}

	onClick(value){
		this.todoService.todos.push(value)
		console.log(this.todoService.todos);
	}
}