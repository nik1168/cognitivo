         //Using the HiveMQ public Broker, with a random client Id
 var client = new Messaging.Client("test.mosquitto.org", 8080, "myclientid_" + parseInt(Math.random() * 100, 10));
//Connect Options
 var options = {
     timeout: 3,
     //Gets Called if the connection has sucessfully been established
     onSuccess: function () {
         //alert("Connected");
         // $('#estado').text('Conectado');
         client.subscribe('/world', {qos: 2});
     },
     //Gets Called if the connection could not be established
     onFailure: function (message) {
      //  $('#estado').text('Error de conexion:');
        // alert("Connection failed: " + message.errorMessage);
     }
 };
 client.connect(options);

function erase(){
//  $('#messages').empty();

}

 //Gets  called if the websocket/mqtt connection gets disconnected for any reason
 client.onConnectionLost = function (responseObject) {
     //Depending on your scenario you could implement a reconnect logic here
    //  $('#messages').empty();
    //  $('#estado').text('Desconectado');
     //alert("connection lost: " + responseObject.errorMessage);

 };

 //Gets called whenever you receive a message for your subscriptions
 client.onMessageArrived = function (message) {
     //Do something with the push message you received
    // $('#messages').append('<span>Topic: ' + message.destinationName + '  | ' + message.payloadString + '</span><br/>');
 };

 
  


 //Creates a new Messaging.Message Object and sends it to the HiveMQ MQTT Broker
 var publish = function (payload, topic, qos) {
     //Send your message (also possible to serialize it as JSON or protobuf or just use a string, no limitations)
     var message = new Messaging.Message(payload);
     message.destinationName = topic;
     message.qos = qos;
     client.send(message);
     alert("entro");
 }
