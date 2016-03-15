(function(){
 
  var app = angular.module('myApp', []);

   app.controller('StoreController', ['$http', function($http){

  var store = this;
  store.products = [];
  $http.get('http://localhost/projet_webdesign_AD_GM-gotgotgot-patch-1/json/vehicules-commercialises.json').success(function(data){
    store.products = data;
  });

this.isSelected=function(modeleGiven){
modeleGiven=this.product.fields.marque_modele;
return;
};

}]);

 app.controller('TabController',function(){
    this.tab=1;
    this.isSet=function(givenTab){
      return this.tab===givenTab;
    };
    this.setTab=function(selectedTab){
                          this.tab=selectedTab;
                          };
    
  });

 
  
//Controlleur vérifiant le caractère unique



})();
