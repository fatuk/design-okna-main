(function () {
	'use strict';

	angular.module('rangeDirective', ['rzModule'])
		.directive('range', [
			rangeDirective
		]);

	function rangeDirective() {
		return {
			restrict: 'E',
			templateUrl: 'views/directives/range.html',
			scope: {
				min: '=',
				max: '=',
				options: '@'
			},
			replace: true,
			link: rangeDirectiveLink
		};
	}

	function rangeDirectiveLink(scope, el, attr) {
		scope.options = angular.fromJson(attr.options);

		var min = scope.options.floor,
			max = scope.options.ceil;

		scope.$watch('min', function (value) {
			if (value > max) {
				scope.min = scope.max;
			}
			if (value < min) {
				scope.min = min;
			}

			if (scope.min > scope.max) {
				scope.min = scope.max;
			}
		});

		scope.$watch('max', function (value) {
			if (value > max) {
				scope.max = max;
			}
			if (value < min) {
				scope.max = scope.min;
			}
			if (scope.max < scope.min) {
				scope.max = scope.min;
			}
		});
	}
})();
