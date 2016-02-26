
/**
 * Helper functions only loaded during unit testing.
 * @module test-utils
 */

/**
 * Adds expectations for a valid input with a certain model value.
 *
 * @param ngModelValue - The current model value from the scope.
 * @param {angular.element} input - The input's angular object.
 * @param value - The expected value.
 */
exports.expectValidInput = function (ngModelValue, input, expectedValue) {
  // Model should be updated.
  expect(ngModelValue).toBe(expectedValue);
  // Model should be valid.
  expect(input.hasClass('ng-invalid')).toBeFalsy();
};

/**
 * Adds expectations for an invalid input.
 *
 * @param ngModelValue - The current model value from the scope.
 * @param input {angular.element} - The input's angular object.
 */
exports.expectInvalidInput = function (ngModelValue, input) {
  // Model should be cleared.
  expect(ngModelValue).toBeUndefined();
  // Input should be invalid.
  expect(input.hasClass('ng-invalid')).toBeTruthy();
};

/**
 * Adds expectations for a valid input with a certain model value.
 *
 * @param {Object} scope - The current model value from the scope.
 * @param {angular.element} input - The input's angular object.
 * @param value - The new value.
 */
exports.updateInputValue = function (scope, input, value) {
  input.val(value);
  input.triggerHandler('change');
  scope.$apply();
};