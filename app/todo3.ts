import {
	Component,
	bootstrap,
	CORE_DIRECTIVES,
	FORM_DIRECTIVES
} from 'angular2/angular2';

@Component({
	selector: 'todo',
	templateUrl: 'partials/todo2.html',
	directives: [
		CORE_DIRECTIVES,
		FORM_DIRECTIVES
	]
})
export class Todo {
	label: string;
	todos: Array<TodoItem>;
	
	constructor() {
		this.label = '';
		this.todos = [{
			label: 'Learn Angular',
			complete: false	
		},{
			label: 'Learn Angular2',
			complete: false
		},{
			label: 'Learn React',
			complete: false	
		},{
			label: 'Learn Redux',
			complete: false
		},{
			label: 'Learn Alt',
			complete: false
		}];	
	}
	
	updateIncomplete() {
		return this.todos.filter(item => !item.complete).length;
	}
	
	deleteItem(index) {
		this.todos.splice(index, 1);
	}
	
	onSubmit(event) {
		if (this.label.length) {
			this.todos.unshift({
				label: this.label,
				complete: false
			});
			this.label = '';
		}
		event.preventDefault();		
	}
};

interface TodoItem {
	label: string,
	complete: boolean
}

bootstrap(Todo);