let switches = ['switch1','switch2','switch3','switch4'];
let i = 0;
setInterval(function(){
	if (i<3){
		i++;
	} else {
		i=0;
	}
	document.getElementById(switches[i]).checked = true;
}, 3000);