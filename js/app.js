(function(){
 
  var app = angular.module('carProjet', []);
   app.controller('StoreController', ['$http','$scope', function($http,$scope){
  var store = this;
  store.products = [];

  $http.get('http://localhost/projet_web_design/chevrolet.json').success(function(data){
    store.products = data;
  });



}]);

})();
