angular.module('starter.controllers', ['lodash'])
.run(function (Tours, $rootScope) {
  Tours.getTours(function (r) {
    var data = Tours.parse(r);
    console.log(data);
    $rootScope.tours = {
      data: data.tours,
      getCountry: function (tourId) {
        return data.countries.filter(function(country){
          return country.id === tourId;
        }) 
      },
      getTour: function (tourId) {
        return data.tours.filter(function(tour){
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
  $scope.limit = 200;
  $scope.more = false;
  $scope.id = parseInt($stateParams.id);
  $scope.showMore = function () {
    $scope.more = true;
  };

  $scope.showLess = function () {
    $scope.more = false;
  }

  console.log( $stateParams.id);
  $scope.tour = $rootScope.tours.getTour($scope.id)[0];
  $scope.tour.country = $rootScope.tours.getCountry($scope.id)[0].name;
  console.log($rootScope.tours.getCountry($scope.id)[0]);
})
.controller('tourLocationCtrl', function($scope, $stateParams) {

})
