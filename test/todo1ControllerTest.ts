/// <reference path="../typings/mocha/mocha.d.ts" />
/// <reference path="../typings/chai/chai.d.ts" />
import { TodoController, ITodoController, ITodoItem } from '../app/todo1/todo1';
import { expect } from 'chai';

declare var angular: any;

describe('TodoController', () => {
	var subject: ITodoController;
	
	beforeEach(function() {
		subject = new TodoController(null, null);
	})
	
	it('should be able to instantiate controller', function() { 
		expect(subject).to.be.not.null;
	});
});