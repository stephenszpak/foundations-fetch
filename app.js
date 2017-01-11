;(function() {
	var myFunc = () => console.log("function 1")
	myFunc();
})();

;(function() {
	var myFunc = () => { 1+1 = 2}console.log("function 2")
	myFunc();
})();

;(function() {
	var app = angular.module('myApp').controller();
})();