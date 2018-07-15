var cp1=1;

function close_search() {
document.getElementById("st").style.visibility = "hidden";
}




function open_search() {
document.getElementById("st").style.visibility = "visible";

}



function myFunction(cp,eye) {
    var x = document.getElementsByClassName("img_poe");
   // var eyes = document.getElementsByTagName("i2");
	  //eyes[eye].style.background:"#ccc";
 var i;
    for (i = 0; i < x.length; i++) {
	if (cp==1){
        x[i].style.visibility = "hidden";
	}else{
       x[i].style.visibility = "visible";
	}

    }
	if (cp==0){
	document.getElementById("menu_lv1").style.color = "Blue";
	document.getElementById("status_text").style.color = "Blue";
	document.getElementById("poe_stauts").checked =true;
	cp1=1;
	}else{
	document.getElementById("menu_lv1").style.color = "#000";
	document.getElementById("status_text").style.color = "#000";
	document.getElementById("poe_stauts").checked =false;
	cp1=0;
	}
	
}

function myFunction_wifi(cp,eye) {
    var x = document.getElementsByClassName("imgb");
 var i;
    for (i = 0; i < x.length; i++) {
	if (cp==1){
        x[i].style.visibility = "hidden";
	}else{
       x[i].style.visibility = "visible";
	}

    }
	if (cp==0){
	cp1=1;
	document.getElementById("menu_lv2").style.color = "Blue";
	document.getElementById("status_text2").style.color = "Blue";
	document.getElementById("ap_stauts").checked = true;
		}else{
	cp1=0;
	document.getElementById("menu_lv2").style.color = "#000";
	document.getElementById("status_text2").style.color = "#000";
	document.getElementById("ap_stauts").checked = false;
		}
}

function myFunction_alert(cp,eye) {
    var x = document.getElementsByClassName("img_alert");
 var i;
    for (i = 0; i < x.length; i++) {
	if (cp==1){
        x[i].style.visibility = "hidden";
	}else{
       x[i].style.visibility = "visible";
	}

    }
	if (cp==0){
	cp1=1;
	document.getElementById("menu_lv2").style.color = "Blue";
	document.getElementById("status_text2").style.color = "Blue";
	document.getElementById("alert_stauts").checked = true;
		}else{
	cp1=0;
	document.getElementById("menu_lv2").style.color = "#000";
	document.getElementById("status_text2").style.color = "#000";
	document.getElementById("alert_stauts").checked = false;
		}
}

function myFunction_off(cp,eye) {
    var x = document.getElementsByClassName("img_off");
 var i;
    for (i = 0; i < x.length; i++) {
	if (cp==1){
        x[i].style.visibility = "hidden";
	}else{
       x[i].style.visibility = "visible";
	}

    }
	if (cp==0){
	cp1=1;
	document.getElementById("menu_lv2").style.color = "Blue";
	document.getElementById("status_text2").style.color = "Blue";
	document.getElementById("off_stauts").checked = true;
		}else{
	cp1=0;
	document.getElementById("menu_lv2").style.color = "#000";
	document.getElementById("status_text2").style.color = "#000";
	document.getElementById("off_stauts").checked = false;
		}
}


