(function(){
 
  var app = angular.module('myApp', []);
   app.controller('StoreController', ['$http', function($http){
  var store = this;
  store.products = [];
  $http.get('http://localhost/projet_webdesign_AD_GM-master/json/vehicules-commercialises.json').success(function(data){
    store.products = data;
  });
}]);



})();
