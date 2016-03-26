
angular.module('starter.controllers', ['lodash'])

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

.factory("Tours", function() {
  var tours = [
        {
          "countryId": 0,
          "id": 0,
          "latitude": -6.081689,
          "longitude": 145.39188,
          "name": "Goroka"
        },
        {
          "countryId": 0,
          "id": 1,
          "latitude": -5.207083,
          "longitude": 145.7887,
          "name": "Madang"
        },
        {
          "countryId": 0,
          "id": 2,
          "latitude": -5.826789,
          "longitude": 144.29587,
          "name": "Mount Hagen"
        },
        {
          "countryId": 0,
          "id": 3,
          "latitude": -6.569828,
          "longitude": 146.72624,
          "name": "Nadzab"
        },
        {
          "countryId": 0,
          "id": 4,
          "latitude": -9.443383,
          "longitude": 147.22005,
          "name": "Port Moresby"
        },
        {
          "countryId": 0,
          "id": 5,
          "latitude": -3.583828,
          "longitude": 143.66919,
          "name": "Wewak"
        },
        {
          "countryId": 239,
          "id": 6,
          "latitude": 61.16052,
          "longitude": -45.42598,
          "name": "Narssarssuaq"
        },
        {
          "countryId": 239,
          "id": 7,
          "latitude": 64.190926,
          "longitude": -51.678062,
          "name": "Godthaab"
        },
        {
          "countryId": 239,
          "id": 8,
          "latitude": 67.01697,
          "longitude": -50.689323,
          "name": "Sondrestrom"
        },
        {
          "countryId": 239,
          "id": 9,
          "latitude": 76.531204,
          "longitude": -68.70316,
          "name": "Thule"
        },
        {
          "countryId": 66,
          "id": 10,
          "latitude": 65.659996,
          "longitude": -18.072702,
          "name": "Akureyri"
        },
        {
          "countryId": 66,
          "id": 11,
          "latitude": 65.28333,
          "longitude": -14.401389,
          "name": "Egilsstadir"
        },
        {
          "countryId": 66,
          "id": 12,
          "latitude": 64.295555,
          "longitude": -15.227222,
          "name": "Hofn"
        }
      ];

  var Tours = {
    data: tours,
    getTours: function () {
      return tours;
    },

    getTour: function (tourId) {
      return tours.filter(function(tour){
        return tour.id === tourId;
      }) 
    }

  }
  return Tours;
})

.controller('ToursCtrl', ["$scope", "Tours", function($scope, Tours) { 
    _([1, 2]).forEach(function(value) {
      console.log(value);
    });
    $scope.tours = Tours.getTours();
}])

.controller('TourCtrl', ["$scope", "$stateParams", "Tours", function($scope, $stateParams, Tours) {
  $scope.tour = Tours.getTour(1)[0];
}])
