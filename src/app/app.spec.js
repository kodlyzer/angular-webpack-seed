import app from './app';

describe('app', () => {

  describe('AppCtrl', () => {
    let ctrl;

    beforeEach(() => {
      angular.mock.module(app);

      angular.mock.inject(($controller) => {
        ctrl = $controller('AppCtrl', {});
      });
    });

    // AppCtrl test cases
    it('should..', () => {
      // expect(ctrl.test).toBe('test');
    });
  });
});