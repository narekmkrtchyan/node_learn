function myFunction(){
	var x = document.getElementById("messige").value;
	if(x!="null"){
	 $( "#area" ).append( "<p>"+x+"<p>" );
	 //$("#messige").val="";
	 document.getElementById("messige").value=" ";
	}
}

$(document).ready(function($) {
	var window_height = $(window).height();
	// debugger;
	$('body').height(window_height - 50);
});