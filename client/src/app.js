import angular from 'angular';

var olympics = angular.module('olympics', []);

olympics.controller('sportsController', function( ) {
 this.sports = ['weightlifting', 'cycling'];
});