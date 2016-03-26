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
      },
      search: function(query_string) {
        var result = [];
        var arr1 = [];
        arr1 = this.city_search(query_string.toLowerCase());
        if (arr1.length != 0) {result = result.concat(arr1)}
        console.log(result);
        return result;
      },
      city_search: function(query_string) {
        var arr = [];
        for (var i = this.length - 1; i >= 0; i--) {
          if (this.data[i]["name"].toLowerCase() == query_string) {
            arr.push(this.data[i]);
          }
        }
        for (var i = this.length - 1; i >= 0; i--) {
          if (this.data[i]["name"].toLowerCase().indexOf(query_string) == 0) {
            arr.push(this.data[i]);
          }
        }
        return arr;
      }
    }
  }); 
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
.controller('AppCtrl', function($scope, $ionicModal, $timeout, $rootScope, $interval) {
  var min = 0;
  var max = $rootScope.tours.length;
  $interval(updateTour, 1000);

  function updateTour () {
    $scope.id = Math.round(Math.random() * (max - min) + min);
  }

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});
})

.controller('QuestCtrl', ['$scope', '$stateParams', '$rootScope', function($scope, $stateParams, $rootScope) {
  $scope.tours = $rootScope.tours.data;
  $scope.tours.temperature = 25;

  $scope.tours.price = 1000;
  $scope.activities = [
      {
        name: 'лыжи',
        img: 'data/img/lizhi.png'
      },
      {
        name: 'верблюды',
        img: 'data/img/camel.jpg'
      },
      {
        name: 'ночь',
        img: 'data/img/night.png'
      },
      {
        name: 'шопинг',
        img: 'data/img/shopping.png'
      },
      {
        name: 'океан',
        img: 'data/img/ocean.png'
      },
      {
        name: 'клубы',
        img: 'data/img/club.png'
      }
    ];
  $scope.min = function() {
    if (this.priceMin >= this.priceMax) this.priceMax = this.priceMin;
  };
  $scope.max = function() {
    if (this.priceMax <= this.priceMax) this.priceMin = this.priceMax;
  };

}])

.controller('MainCtrl', function($scope, $stateParams, $rootScope, $interval) {
  var min = 0;
  var max = $rootScope.tours.length;
  $scope.id = 1;
  $interval(updateTour, 1000);

  function updateTour () {
    $scope.id = Math.round(Math.random() * (max - min) + min);
  }
})

.controller('ToursCtrl', function($scope, $rootScope, $stateParams) {
    $scope.tours = $rootScope.tours.data;
    console.log($stateParams)
    function getShow(tour) {
      if($stateParams.price) {
        tour.show = tour.price <=  $stateParams.price ? true : false;
        //tour.show = tour.activities.filter(function ())
      } else {
        tour.show = true;
      }
      
    }
    $scope.tours.forEach(function(t) {
      getShow(t);
    });
    // debugger;
    
    

   
    $scope.searchChanged = function() {
      $scope.tours = $rootScope.tours.search(this.searchInput);
    };
    $scope.desc = function(item) {
      return item.description.split(' ').slice(0, 7).join(' ') + ' ...';
    };
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
