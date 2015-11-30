var Todo = ng
	.Component({
		selector: 'todo',
		templateUrl: 'partials/todo2.html',
	    directives: [ng.CORE_DIRECTIVES, ng.FORM_DIRECTIVES],
	})
	.Class({
		constructor: function() {
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
		},
		
		updateIncomplete: function() {
			return this.todos.filter(function(item) {
				return !item.complete;
			}).length;
		},
				
		deleteItem: function(index) {
			this.todos.splice(index, 1);
		},				
				
		onSubmit: function(event) {
			event.preventDefault();	
			if (this.label.length) {
				this.todos.unshift({
					label: this.label,
					complete: false
				});
				this.label = '';
			}
		}	
	});
		
document.addEventListener('DOMContentLoaded', function() {
	ng.bootstrap(Todo);
});