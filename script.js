// Acceleration variables
var ax = 0;
var ay = 0;


// Give user an error if no accelerometer motion is detected (not on mobile, dysfunctional sensor, etc.)
if(window.DeviceMotionEvent==undefined){
	document.getElementById("no").style.display="block"; 
	document.getElementById("yes").style.display="none";
}
	else {
	window.ondevicemotion = function(event) {
		ax = event.accelerationIncludingGravity.x;
		ay = event.accelerationIncludingGravity.y;
		az = event.accelerationIncludingGravity.z;
		
		document.getElementById("data").innerHTML = "x: " + ax + "<br/>" + "y: " + ay + "<br/>" + "z: " + az;	
	}
}