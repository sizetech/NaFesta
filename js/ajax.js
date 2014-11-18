
//Configurações do jQuery
jQuery.ajaxSetup({

	dataType: "json",
	type: "post",
	timeout: 15000,
	error: function(){

		alert("Erro de requisição com o servidor. Por favor tente mais tarde.");

	}

});