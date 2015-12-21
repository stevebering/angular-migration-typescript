/// <reference path="../../typings/jquery/jquery.d.ts" />
/// <reference path="../../typings/angularjs/angular.d.ts" />
import {module} from "angular";

import { TodoDirective } from './todo1';

export var app = module('Todo', []);

app.directive('todo', TodoDirective);