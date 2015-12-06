export interface ITodoItem {
	label: string,
	complete: boolean
}

export interface ITodoController {
	todos: Array<ITodoItem>;
	label: string,
	log: any;	
}

export class TodoController implements ITodoController {
	label: string;
	todos: Array<ITodoItem>;
	log: any;
	
	inject = ['$http', '$log']
	
	constructor($http: any, $log: any) {
		this.log = $log;
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
	
	updateIncomplete = function() {
		return this.todos.filter(function(item) {
			return !item.complete;
		}).length;
	};
	
	deleteItem = function(index) {
		this.log.debug('deleting item ' + index);
		this.todos.splice(index, 1);
	};				
	
	onSubmit = function(event) {
		this.log.debug('adding todo: ' + this.label);
		if (this.label.length) {
			this.todos.unshift({
				label: this.label,
				complete: false
			});
			
			this.label = '';
		}
		event.preventDefault();	
	};
}

export class TodoDirective {	
	scope = {};
	restrict = 'E';
	replace = true;
	controllerAs = "vm";
	bindToController = {};
	templateUrl = "partials/todo.html";
	controller = TodoController;
}