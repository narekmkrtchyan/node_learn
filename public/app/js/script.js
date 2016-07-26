function myFunction(){
	var x = document.getElementById("messige").value;
	if(x!="null"){
	 $( "#area" ).append( "<p>"+x+"<p>" );
	 document.getElementById("messige").value=" ";
	}
}

$(document).ready(function($) {
	var window_height = $(window).height();
	$('body').height(window_height - 50);
});