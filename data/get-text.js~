var hr = document.getElementById("edit-box-hr");
var mn = document.getElementById("edit-box-min");
var btn = document.getElementById("sub-btn");

btn.addEventListener('click',function receive(){
	hours=document.getElementById('edit-box-hr') ? document.getElementById('edit-box-hr').value : "0";
	
	mins=document.getElementById('edit-box-min') ? document.getElementById('edit-box-min').value : "0";

	sec=hours*60*60+mins*60;
	self.port.emit("text-entered", sec);
    	hr.value = '';
	mn.value='';
    	self.port.emit("close");
}, false);

self.port.on("show", function onShow() {
  hr.focus();
});

