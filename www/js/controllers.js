angular.module('starter.controllers', ['lodash'])
.run(function (Tours, $rootScope) {
  Tours.getTours(function (r) {
    var tours = Tours.parse(r);
    console.log(tours);
    $rootScope.tours = {
      data: tours.tours,
      getTour: function (tourId) {
        return tours.tours.filter(function(tour){
          return tour.id === tourId;
        }) 
      }
    }
  }); 
})
.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('QuestCtrl', function($scope, $stateParams) {

})

.factory("Tours", function($http) {

    function getTours (cb) {
      $http.get('data/data.json').then(cb);
    };

    function parse(r) {
      return r.data;
    }

  return {
    getTours: getTours,
    parse: parse
  };
})

.controller('ToursCtrl', function($scope, $rootScope) {
    $scope.tours = $rootScope.tours.data;
})

.controller('TourCtrl', function($scope, $stateParams, $rootScope) {
  $scope.tour = $rootScope.tours.getTour(1)[0];
  console.log($scope.tour.image);
})
