System.register(['angular2/core', 'angular2/platform/browser', 'angular2/common'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
        switch (arguments.length) {
            case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
            case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
            case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
        }
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1, common_1;
    var Todo;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (common_1_1) {
                common_1 = common_1_1;
            }],
        execute: function() {
            Todo = (function () {
                function Todo() {
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
                Todo.prototype.updateIncomplete = function () {
                    return this.todos.filter(function (item) { return !item.complete; }).length;
                };
                Todo.prototype.deleteItem = function (index) {
                    this.todos.splice(index, 1);
                };
                Todo.prototype.onSubmit = function (event) {
                    if (this.label.length) {
                        this.todos.unshift({
                            label: this.label,
                            complete: false
                        });
                        this.label = '';
                    }
                    event.preventDefault();
                };
                Todo = __decorate([
                    core_1.Component({
                        selector: 'todo',
                        templateUrl: 'partials/todo2.html',
                        directives: [
                            common_1.CORE_DIRECTIVES,
                            common_1.FORM_DIRECTIVES
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], Todo);
                return Todo;
            })();
            exports_1("Todo", Todo);
            ;
            browser_1.bootstrap(Todo);
        }
    }
});
