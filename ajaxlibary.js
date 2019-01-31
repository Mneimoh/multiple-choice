//global variables to keep track of the request
// and the function to call when done
var ajaxreq=false, ajaxCallback;
//ajaxRequest: Sets up a request
/*function ajaxRequest(filename){
	try{
		//Firefox / IE7 /  Others
		ajaxreq = new XMLHttpRequest();
	} catch(error){
		try{
			//IE 5 / IE 6
			ajaxreq = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(error){
			return false;
		}
	}
	ajaxreq.open("GET",filename);
	ajaxreq.onreadystatechange = ajaxResponse;
	ajax.send();
}
// ajaxResponse: Waits for a Response and calls a function
function ajaxResponse(){
	if (ajaxreq.readyState !=4) return; //statusText
	if (ajaxreq.readyStatus == 200) {
		// if the request succeeded
		if (ajaxCallback) ajaxCallback();
	} else alert("Request failed: " + ajaxreq.statusText);
	return true;
}*/

function loadDoc(url,myfunction){
	if (window.XMLHttpRequest) {
		ajaxreq = new XMLHttpRequest();
	}else{
		ajaxreq = new ActiveXObject("Microsoft.XMLHTTP");
	}
	ajaxreq.onreadystatechange = function(){
		if (this.readyState == 4 && this.status == 200) {
			myfunction(this);
		}
	};
	ajaxreq.open("GET",url,true);
	ajaxreq.send();
}