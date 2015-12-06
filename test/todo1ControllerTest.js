/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
var todo1_1 = require('../app/todo1/todo1');
var chai_1 = require('chai');
describe('TodoController', function () {
    var subject;
    beforeEach(function () {
        subject = new todo1_1.TodoController(null, null);
    });
    it('should be able to instantiate controller', function () {
        chai_1.expect(subject).to.be.not.null;
    });
});
