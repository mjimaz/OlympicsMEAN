import angular from 'angular';

var olympics = angular.module('olympics', []);

olympics.controller('sportsController', function( $http ) {
 this.sports;
 var context = this;
 $http.get('/sports').then (function (response) {
    context.sports = response.data;
 });
});