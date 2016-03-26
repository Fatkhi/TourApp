angular.module('starter.controllers', ['lodash'])
.run(function (Tours, $rootScope) {
  Tours.getTours(function (r) {
    var data = Tours.parse(r);
    console.log(data);
    $rootScope.tours = {
      data: data.tours,
      length: data.tours.length,
      getCountry: function (cId) {
        return data.countries.filter(function(country){
          return country.id === cId;
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
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, $interval) {
  var min = 0;
  var max = $rootScope.tours.length;
  $interval(updateTour, 1000);

  function updateTour () {
    $scope.id = Math.random() * (max - min) + min;
  }

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('QuestCtrl', ['$scope', '$stateParams', function($scope, $stateParams) {
  $scope.temperature = 25;
  $scope.priceMin = 0;
  $scope.priceMax = 500;
  $scope.activities = ['лыжи', 'ночь', 'верблюды', 'океан', 'шопинг', 'клубы'];
  $scope.$watch('priceMin', function() {
    if ($scope.priceMin > $scope.priceMax) {console.log('hey');}
      
  });
}])

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
    $scope.activities = ['лыжи', 'ночь', 'верблюды', 'океан', 'шопинг', 'клубы'];
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

  $scope.tour.country = $rootScope.tours.getCountry($scope.tour.CountryId)[0].name;
})
.controller('tourLocationCtrl', function($scope, $stateParams) {

})


function Quantity(numOfPcs) {
    var qty = numOfPcs;
    var dozens = numOfPcs / 12;

    this.__defineGetter__("qty", function () {
        return qty;
    });

    this.__defineSetter__("qty", function (val) {        
        val = parseInt(val);
        qty = val;
        dozens = val / 12;
    });

}