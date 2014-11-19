$(document).ready(function(){
  
});
function chamarInicio(){
    $.ajax({
        url: 'home.html',
       success: function(data) {
       	   $('#content').html(data);
		 }
    });	
}



