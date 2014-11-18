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

function chamarTv(){
    $.ajax({
        url: 'tvNafesta.html',
       success: function(data) {
       	   $('#content').html(data);
		 }
    });
}

function chamarRadio(){
	$.ajax({
	url: 'radio.html',
       success: function(data) {
       	   $('#content').html(data);
		 }
		  });
}

function chamarColuna(){
	$.ajax({
	url: 'coluna.html',
       success: function(data) {
       	   $('#content').html(data);
		 }
		  });
}
