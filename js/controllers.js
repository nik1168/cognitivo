angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})

.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('UsersCtrl', function($scope,Users,$stateParams) {
  $scope.find = function () {
       $scope.usuarios2 = Users.query();
    };
    $scope.findOne = function () {
       // Usar el metodo 'get' de user para enviar una peticion GET apropiada
       $scope.user = Users.get({
        usermobileID : $stateParams.usermobileID
       });
    };
  $scope.usuarios = [
    { nombre: 'Niklaus', id: 1 },
    { nombre: 'Claudia', id: 2 },
    { nombre: 'Abdres', id: 3 },
    { nombre: 'Mariela', id: 4 },
    { nombre: 'Miguel', id: 5 },
    { nombre: 'Iris', id: 6 }
  ];
})
.controller('FuerzaCtrl', function($scope){
    var client2 = new Messaging.Client("test.mosquitto.org", 8080, "myclientid_" + parseInt(Math.random() * 100, 10));
    var options = {
        timeout: 3,
        //Gets Called if the connection has sucessfully been established
        onSuccess: function () {
            //alert("Connected");
             console.log("Conectado");
             //$scope.estados.push({estado:"conectado"});
             client2.subscribe('/cognitive/casa/fuerza', {qos: 2});
        },
        //Gets Called if the connection could not be established
        onFailure: function (message) {
           //$scope.estados = "error de conexion";
           // alert("Connection failed: " + message.errorMessage);
        }
    };
    $scope.connect=function(){
      client2.connect(options);
    };
  //  client2.connect(options);
//$scope.connect();
  //Gets called whenever you receive a message for your subscriptions
  client2.onMessageArrived = function (message) {
      //Do something with the push message you received
      //angular.element('#messages2').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');
      $('#messages2').append('|' + message.payloadString + '</span><br/>');
     // console.log(message.timestamp);
    if(message.payloadString == 2){
      alert("ALERTA!!!!!");
    }
     // $scope.mensajes.push({dato : message.payloadString});
    //  $scope.anadir();
  };

  
})
.controller('VitalCtrl', function($scope){
    var client2 = new Messaging.Client("test.mosquitto.org", 8080, "myclientid_" + parseInt(Math.random() * 100, 10));
    var options = {
        timeout: 3,
        //Gets Called if the connection has sucessfully been established
        onSuccess: function () {
            //alert("Connected");
             console.log("Conectado");
             //$scope.estados.push({estado:"conectado"});
             client2.subscribe('/cognitive/casa/vital', {qos: 2});
        },
        //Gets Called if the connection could not be established
        onFailure: function (message) {
           //$scope.estados = "error de conexion";
           // alert("Connection failed: " + message.errorMessage);
        }
    };
    $scope.connect=function(){
      client2.connect(options);
    };
  //  client2.connect(options);
//$scope.connect();
  //Gets called whenever you receive a message for your subscriptions
  client2.onMessageArrived = function (message) {
      //Do something with the push message you received
      //angular.element('#messages2').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');
      $('#messages2').append('|' + message.payloadString + '</span><br/>');
     // console.log(message.timestamp);
    if(message.payloadString == 2){
      alert("ALERTA!!!!!");
    }
     // $scope.mensajes.push({dato : message.payloadString});
    //  $scope.anadir();
  };

  
})
.controller('PrincipalCtrl', function($scope){
    var client2 = new Messaging.Client("test.mosquitto.org", 8080, "myclientid_" + parseInt(Math.random() * 100, 10));
    var options = {
        timeout: 3,
        //Gets Called if the connection has sucessfully been established
        onSuccess: function () {
            //alert("Connected");
             console.log("Conectado");
             //$scope.estados.push({estado:"conectado"});
             client2.subscribe('/cognitive/casa/puerta', {qos: 2});
        },
        //Gets Called if the connection could not be established
        onFailure: function (message) {
           //$scope.estados = "error de conexion";
           // alert("Connection failed: " + message.errorMessage);
        }
    };
    $scope.connect=function(){
      client2.connect(options);
    };
  //  client2.connect(options);
//$scope.connect();
  //Gets called whenever you receive a message for your subscriptions
  client2.onMessageArrived = function (message) {
      //Do something with the push message you received
      //angular.element('#messages2').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');
      $('#messages2').append('|' + message.payloadString + '</span><br/>');
     // console.log(message.timestamp);
    if(message.payloadString == 2){
      alert("ALERTA!!!!!");
    }
     // $scope.mensajes.push({dato : message.payloadString});
    //  $scope.anadir();
  };

  
})
.controller('PastilleroCtrl', function($scope){
    var client2 = new Messaging.Client("test.mosquitto.org", 8080, "myclientid_" + parseInt(Math.random() * 100, 10));
    var options = {
        timeout: 3,
        //Gets Called if the connection has sucessfully been established
        onSuccess: function () {
            //alert("Connected");
             console.log("Conectado");
             //$scope.estados.push({estado:"conectado"});
             client2.subscribe('/cognitive/casa/pastillero', {qos: 2});
        },
        //Gets Called if the connection could not be established
        onFailure: function (message) {
           //$scope.estados = "error de conexion";
           // alert("Connection failed: " + message.errorMessage);
        }
    };
    $scope.connect=function(){
      client2.connect(options);
    };
  //  client2.connect(options);
//$scope.connect();
  //Gets called whenever you receive a message for your subscriptions
  client2.onMessageArrived = function (message) {
      //Do something with the push message you received
      //angular.element('#messages2').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');
      $('#messages2').append('|' + message.payloadString + '</span><br/>');
     // console.log(message.timestamp);
    if(message.payloadString == 2){
      alert("ALERTA!!!!!");
    }
     // $scope.mensajes.push({dato : message.payloadString});
    //  $scope.anadir();
  };

  
})
.controller('GasCtrl', function($scope){
    var client2 = new Messaging.Client("test.mosquitto.org", 8080, "myclientid_" + parseInt(Math.random() * 100, 10));
    var options = {
        timeout: 3,
        //Gets Called if the connection has sucessfully been established
        onSuccess: function () {
            //alert("Connected");
             console.log("Conectado");
             //$scope.estados.push({estado:"conectado"});
             client2.subscribe('/cognitive/casa/gas', {qos: 2});
        },
        //Gets Called if the connection could not be established
        onFailure: function (message) {
           //$scope.estados = "error de conexion";
           // alert("Connection failed: " + message.errorMessage);
        }
    };
    $scope.connect=function(){
      client2.connect(options);
    };
  //  client2.connect(options);
//$scope.connect();
  //Gets called whenever you receive a message for your subscriptions
  client2.onMessageArrived = function (message) {
      //Do something with the push message you received
      //angular.element('#messages2').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');
      $('#messages2').append('|' + message.payloadString + '</span><br/>');
     // console.log(message.timestamp);
    if(message.payloadString == 2){
      alert("ALERTA!!!!!");
    }
     // $scope.mensajes.push({dato : message.payloadString});
    //  $scope.anadir();
  };

  
})


.controller('PlaylistCtrl', function($scope, $stateParams) {
});
