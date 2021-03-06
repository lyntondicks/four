angular.module('cad', ['four']);

angular
    .module('cad')
    .controller('NavController',
        ['$scope', function ($scope) {

            $scope.MODES = {
                SELECTION: 'selection',
                TRACKBALL: 'trackball',
                ORBIT: 'orbit',
                WALK: 'walk'
            };

            $scope.setMode = function (mode) {
                $scope.mode = mode;
                if (mode === $scope.MODES.SELECTION) {
                    window['viewport'].setMode(window['viewport'].MODES.SELECTION);
                } else if (mode === $scope.MODES.TRACKBALL) {
                    window['viewport'].setMode(window['viewport'].MODES.TRACKBALL);
                } else if (mode === $scope.MODES.ORBIT) {
                    window['viewport'].setMode(window['viewport'].MODES.ORBIT);
                } else if (mode === $scope.MODES.WALK) {
                    window['viewport'].setMode(window['viewport'].MODES.WALK);
                }
            };

            $scope.setView = function (view) {
                $scope.view = view;
                if (view === $scope.VIEWS.PERSPECTIVE) {
                    window['viewport'].camera.setView($scope.VIEWS.PERSPECTIVE);
                } else if (view === $scope.VIEWS.TOP) {
                    window['viewport'].camera.setView($scope.VIEWS.TOP);
                } else if (view === $scope.VIEWS.LEFT) {
                    window['viewport'].camera.setView($scope.VIEWS.LEFT);
                } else if (view === $scope.VIEWS.RIGHT) {
                    window['viewport'].camera.setView($scope.VIEWS.RIGHT);
                } else if (view === $scope.VIEWS.FRONT) {
                    window['viewport'].camera.setView($scope.VIEWS.FRONT);
                } else if (view === $scope.VIEWS.BACK) {
                    window['viewport'].camera.setView($scope.VIEWS.BACK);
                }
            };

            $scope.init = function () {
                setTimeout(function () {
                    //$scope.VIEWS = window['viewport'].camera.VIEWS;
                    //$scope.camera = window['viewport'].camera;
                    //$scope.mode = $scope.MODES.SELECTION;
                    //$scope.view = window['viewport'].camera.VIEWS.PERSPECTIVE;
                }, 2000);
            };


            // initialize the controller
            $scope.init();

        }]);
