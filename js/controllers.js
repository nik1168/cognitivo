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
.controller('MapCtrl', function($scope,$http) {
  var latLng2;
  $http({
      url: 'http://cognitive-sisinfo.rhcloud.com/maps',
      method: "GET"
  })
  .then(function(response) {
    console.log(response);
        var tu = response.data;
        console.log(tu);
        var d = tu.toString();
        var separa = d.split(",");
        console.log(separa[1]);
        console.log(separa[2]);
          var latLng = new google.maps.LatLng(separa[1], separa[2]);
 
    var mapOptions = {
      center: latLng,
      zoom: 16,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
 
    $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    google.maps.event.addListenerOnce($scope.map, 'idle', function(){
 
   var marker = new google.maps.Marker({
      map: $scope.map,
      animation: google.maps.Animation.DROP,
      position: latLng
  });      
 
  var infoWindow = new google.maps.InfoWindow({
      content: "Aqui estoy"
  });
 
  google.maps.event.addListener(marker, 'click', function () {
      infoWindow.open($scope.map, marker);
  });      
 
});
  },
  function(response) { // optional
          console.log("fallo:"+response);
  });
 
})

.controller('UsersCtrl', function($scope,Users,$stateParams,$location) {
  $scope.create = function () {
      //Instanciamos el objeto con los parametros a anadir
       var user = new Users({
        firstName : this.firstName,
        lastName : this.lastName,
        username : this.username,
        password : this.password,
        email : this.email
       });

       //Utilizamos el metodo save de user para enviar la peticion POST apropiada
       user.$save(function (response) {
         // Si un usuario fue creado de modo correcto, redireccionar al usuario a la pagina del usuario
         $location.path('/app/users/'+ response._id);
        },
        function (errorResponse) {
           // En otro caso, presentar al usuario el mensaje de errorr
           $scope.error = errorResponse.data.message;
        });


    };
  $scope.find = function () {
       $scope.usuarios2 = Users.query();
    };
    $scope.findOne = function () {
       // Usar el metodo 'get' de user para enviar una peticion GET apropiada
       $scope.user = Users.get({
        usermobileID : $stateParams.usermobileID
       });
    };
    //Creamos el metodo Update
    $scope.update= function () {
       //Usar el metodo '$update', de user para enviar una peticion PUT apropiada
       $scope.user.$update(function () {
         //si un usuario fue actualizado de modo correcto, redirigir el user a la apgina del article
         $location.path('/app/users/'+$scope.user._id);

       },
       function (errorResponse) {
         // En otro caso, se presenta el mensaje de error
         $scope.error = errorResponse.data.message;
       }
       );
    };

    //Creamos el metodo delete
    $scope.delete = function (user) {
       //Si un usuario fue enviado al metodo, borrarlo (Es decir si se envia desde la lista de usuarios)
       if(user){
        //Usar el emtodo $remove de user para borrar el usuario
        user.$remove(function () {
           //Eliminar el usuario de la lista de articulos
           // for (var i in $scope.users){
           //   if($scope.users[i] == user){
           //     $scope.user.splice(i,1);
           //   }
           // }
           $location.path('/app/users');
        });
       }
       else{
        //En otro caso, usar el metodo '$remove' de user para borrar el usuario (Es decir si se elimina el usuario de la propia pagina)
        $scope.user.$remove(function () {
          $location.path('/app/users');
        });
       }
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
.controller('ReportCtrl', function($scope,Report,$stateParams,$location) {
 
  $scope.find = function () {
       $scope.reports = Report.query();
    };
    $scope.findOne = function () {
       // Usar el metodo 'get' de user para enviar una peticion GET apropiada
       $scope.report = Report.get({
        reportID : $stateParams.reportID
       });
    };

    //Creamos el metodo delete
    $scope.delete = function (report) {
       //Si un usuario fue enviado al metodo, borrarlo (Es decir si se envia desde la lista de usuarios)
       if(report){
        //Usar el emtodo $remove de user para borrar el usuario
        user.$remove(function () {
           //Eliminar el usuario de la lista de articulos
           // for (var i in $scope.users){
           //   if($scope.users[i] == user){
           //     $scope.user.splice(i,1);
           //   }
           // }
           $location.path('/app/reports');
        });
       }
       else{
        //En otro caso, usar el metodo '$remove' de user para borrar el usuario (Es decir si se elimina el usuario de la propia pagina)
        $scope.report.$remove(function () {
          $location.path('/app/report');
        });
       }
    };
  
})
.controller('PfeifferCtrl', function($scope,Pfeiffer,$stateParams,$location) {
  var d = new Date();
    $scope.dates = d.toDateString();
    var weekday = new Array(7);
weekday[0]=  "Domingo";
weekday[1] = "Lunes";
weekday[2] = "Martes";
weekday[3] = "Miercoles";
weekday[4] = "Jueves";
weekday[5] = "Viernes";
weekday[6] = "Sabado";

 $scope.n = weekday[d.getDay()];
   //Exponer el service Authentication
  // $scope.authentication = Authentication;

   //creamos un nuevo controller para crear nuevos articulos
   $scope.create = function () {
     //Usar los campos form para crear un nuevo objeto $resource article
     var pfeiffer = new Pfeiffer({
      date : this.date,
      weekDay : this.weekDay,
      tnumber : this.tnumber,
      address : this.address,
      age : this.age,
      birthdate : this.birthdate,
      currentPresident : this.currentPresident,
      lastPresident : this.lastPresident,
      motherLastName : this.motherLastName,
      substraction : this.substraction,
      result : this.date + this.weekDay + this.tnumber+this.address + this.age + this.birthdate + this.currentPresident +this.lastPresident+ this.motherLastName + this.substraction 
     });

     //Usar el metodo '$save' de article para enviar una peticion POST apropiada
     pfeiffer.$save(function (response) {
       //Si un articulo fue creado de modo correcto, redireccionar al usuario a la pagina del articulo
       $location.path('app/pfeiffers/'+response._id);
     },function (errorResponse) {
       //En otro caso, presentar al ususario el mensaje de error
       $scope.error = errorResponse.data.message;
     });
   };
   //Crear un nuevo metodo controller para recuperar una lista de articulos
   $scope.find = function () {
     //Usar el metodo 'query' de article para enviar una peticion GET apropiada
     $scope.pfeiffers = Pfeiffer.query();
   };

   //Crear un nuevo metodo controller para recuperar un unico articulo
   $scope.findOne = function () {
     //Usar el metodo 'get' de article para enviar una peticion GET apropiada
     $scope.pfeiffer = Pfeiffer.get({
      pfeifferID : $stateParams.pfeifferID
     });
   };

   //Crear un nuevo metodo controller para actualizar un unico article
   $scope.update = function () {
     //Usar el metodo '$update' de article para enviar una peticion PUT apropiada
     $scope.pfeiffer.$update(function () {
       //Si un article fue actualizado de modo correcto, redirigir el user a la pagina del article
       $location.path('app/pfeiffers/' + $scope.pfeiffer._id);
     },function (errorResponse) {
       //En otro caso, presenta al user un mensaje de error
       $scope.error = errorResponse.data.message;
     });
   };

   //Crear un nuevo metodo controller para borrar un unico articulo
   $scope.delete = function (pfeiffer) {

     //Si un articulo fue enviado al metodo, borrarlo
     if(pfeiffer){
      //Usar el metodo '$remove' del articulo para borrar el articulo
      pfeiffer.$remove(function () {
         //Eliminar el articulo de la lista de articulos
         // for(var i in $scope.articles){
         //   if($scope.articles[i] == article){
         //     $scope.articles.splice(i,1);
         //   }
         // }
         $location.path('/app/pfeiffers');
      });
     }else{
      // En otro caso, usar el metodo '$remove' de article para borrar el article
      $scope.pfeiffer.$remove(function () {
         $location.path('/app/pfeiffers');
      });
     }
   };
   
   $scope.diagnosticate = function (result) {
     if(result <=2){
       //console.log("Normal");
      return "Normal";

     }
     if (result>2 && result<=4) {
      // console.log("Leve");
        return "Deterioro Cognitivo Leve";

     }
     if (result>4 && result<=7) {
      // console.log("Moderado");
        return "Deterioro Cognitivo Moderado";
    }
    if (result>7 && result<=10) {
      // console.log("Grave");
       return "Deterioro Cognitivo Grave";
   }


 };

})
.controller('FuerzaCtrl', function($scope){
    var client2 = new Messaging.Client("test.mosquitto.org", 8080, "myclientid_" + parseInt(Math.random() * 100, 10));
    var options = {
        timeout: 3,
        //Gets Called if the connection has sucessfully been established
        onSuccess: function () {
            //alert("Connected");
             console.log("Conectado Fuerza");
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
      $('#messagesFuerza').append('<span>' + message.payloadString + '</span><br/>');
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
             console.log("Conectado Vital");
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
      $('#messagesVital').append('<span>' + message.payloadString + '</span><br/>');
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
             console.log("Conectado Principal");
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
      $('#messagesPuerta').append('<span>' + message.payloadString + '</span><br/>');
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
             console.log("Conectado Pastillero");
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
      $('#messagesPastillero').append('<span>' + message.payloadString + '</span><br/>');
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
             console.log("Conectado Gas");
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
      $('#messagesGas').append('<span>' + message.payloadString + '</span><br/>');
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
