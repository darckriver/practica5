// javaScript document

function docReady(){
	document.addEventListener("deviceready",function(){
		//action
		//agregamos un campo y un dato
	/*	window.localStorage.setItem("active",true);
		//obtemos valor de llave
		window.localStorage.getItem("active");
		//obtenemos nombre del campo o llave
		window.localStorage.key(0);
		//Eliminamos campo
		window.localStorage.removeItem("active");
		//limpiando
		window.localStorage.clear();*/
		function onSuccess(acceleration) {
          xvi.innerHTML = acceleration.x ;
          yvi.innerHTML = acceleration.y ;
          zvi.innerHTML = acceleration.z ;
          tvi.innerHTML = acceleration.timestamp;
};

function onError() {
    alert('onError!');
};

var options = { frequency: 3000 };  // Update every 3 seconds

var watchID = navigator.accelerometer.watchAcceleration(onSuccess, onError, options);
		
			
			
		if (window.localStorage.getItem("active")){
			alert(window.localStorage.getItem("active"));
			document.addEventListener("resume",function(){
				window.localStorage.setItem("puntos",window.localStorage.getItem("puntos")+1);
				},false);
		}else {
			window.localStorage.setItem("active",true);
			window.localStorage.setItem("puntos",0);
			}
		document.addEventListener("online",function(){
			alert(navigator.network.connection.type);
			if (navigator.network.connection.type == "wifi"){
				navigator.geolocation.getCurrentPosition(function(position){
					datosGeo.innerHTML = "Latitud "+ position.coords.latitude+"<br/>"+ "longitud: "+position.coords.longitude;
				}, function(err){
					alert(err.message);
				});
			}
		},false); 
	}, false); 
}


	

	