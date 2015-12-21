webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/// <reference path="../../typings/jquery/jquery.d.ts" />
	/// <reference path="../../typings/angularjs/angular.d.ts" />
	var angular_1 = __webpack_require__(1);
	var todo1_1 = __webpack_require__(3);
	exports.app = angular_1.module('Todo', []);
	exports.app.directive('todo', todo1_1.TodoDirective);


/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	var TodoController = (function () {
	    function TodoController($http, $log) {
	        this._label = '';
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
	    Object.defineProperty(TodoController.prototype, "label", {
	        get: function () {
	            return this._label;
	        },
	        set: function (val) {
	            console.log('Setting value: ' + val);
	            this._label = val;
	        },
	        enumerable: true,
	        configurable: true
	    });
	    return TodoController;
	})();
	exports.TodoController = TodoController;
	function TodoDirective() {
	    return {
	        scope: {},
	        restrict: 'E',
	        replace: true,
	        controllerAs: "vm",
	        bindToController: {},
	        templateUrl: "partials/todo.html",
	        controller: TodoController
	    };
	}
	exports.TodoDirective = TodoDirective;


/***/ }
]);
//# sourceMappingURL=todo1.js.map