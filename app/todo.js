(function() {
	
	function todo() {
		return {
			scope: {},
			controller: function() {
				
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
				
				this.updateIncomplete = function() {
					return this.todos.filter(function(item) {
						return !item.complete;
					}).length;
				};
				
				this.deleteItem = function(index) {
					this.todos.splice(index, 1);
				};				
				
				this.onSubmit = function(event) {
					if (this.label.length) {
						this.todos.unshift({
							label: this.label,
							complete: false
						});
						
						this.label = '';
					}
					event.preventDefault();	
				};
			},
			controllerAs: 'vm',
			templateUrl: 'partials/todo.html'
		};
	}
	
	angular
		.module('Todo', [])
		.directive('todo', todo);

})();