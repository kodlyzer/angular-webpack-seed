import angular from 'angular';
import uiRouter from 'angular-ui-router';
import AppComponent from './app.component.js';
import Components from './components/components';
import Containers from './containers/containers';
import './app.css';

angular.module('app', [
  uiRouter,
  Components.name,
  Containers.name
])
.directive('app', AppComponent);
