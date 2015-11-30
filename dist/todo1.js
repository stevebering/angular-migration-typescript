var TodoController = (function () {
    function TodoController($http, $log) {
        this.inject = ['$http', '$log'];
        this.updateIncomplete = function () {
            return this.todos.filter(function (item) {
                return !item.complete;
            }).length;
        };
        this.deleteItem = function (index) {
            this.log.debug('deleting item ' + index);
            this.todos.splice(index, 1);
        };
        this.onSubmit = function (event) {
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
        this.log = $log;
        this.label = '';
        this.todos = [{
                label: 'Learn Angular',
                complete: false
            }, {
                label: 'Learn Angular2',
                complete: false
            }, {
                label: 'Learn React',
                complete: false
            }, {
                label: 'Learn Redux',
                complete: false
            }, {
                label: 'Learn Alt',
                complete: false
            }];
    }
    return TodoController;
})();
var TodoDirective = (function () {
    function TodoDirective() {
        this.scope = {};
        this.restrict = 'E';
        this.replace = true;
        this.controllerAs = "vm";
        this.bindToController = {};
        this.templateUrl = "partials/todo.html";
        this.controller = TodoController;
    }
    return TodoDirective;
})();
angular
    .module('Todo', [])
    .directive('todo', function () { return new TodoDirective(); });
