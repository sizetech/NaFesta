/*<? header("Content-type: text/javascript"); ?>*/
//<script>
//Validação de formularios
var setMasks;
var caresp = Array('<','>','!','#','$','%','¨','&','*','(',')','+','=','{','}','[',']','?',';',':',',','|','"','~','^','´','`','¨','æ','Æ','ø','£','Ø','ƒ','ª','º','¿','®','½','¼','ß','µ','þ','ý','Ý','\'','\\','/',' ','á', 'à', 'ã', 'â', 'ä','Á', 'À', 'Ã', 'Â', 'Ä','é', 'è','É', 'È','í', 'ì','Í', 'Ì','ó', 'ò', 'ö','õ', 'ô','Ó', 'Ò', 'Ö', 'Õ', 'Ô','ú', 'ù', 'ü','Ú','Ù', 'Ü','ç','Ç','ñ','Ñ','§','¬','³','²','¹','°');
var carsfim = Array('.','@','_','-');
function number_format (number, decimals, dec_point, thousands_sep) {
  number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
  var n = !isFinite(+number) ? 0 : +number,
    prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
    sep = (typeof thousands_sep === 'undefined') ? ',' : thousands_sep,
    dec = (typeof dec_point === 'undefined') ? '.' : dec_point,
    s = '',
    toFixedFix = function (n, prec) {
      var k = Math.pow(10, prec);
      return '' + Math.round(n * k) / k;
    };
  // Fix for IE parseFloat(0.55).toFixed(0) = 0;
  s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
  if (s[0].length > 3) {
    s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  }
  if ((s[1] || '').length < prec) {
    s[1] = s[1] || '';
    s[1] += new Array(prec - s[1].length + 1).join('0');
  }
  return s.join(dec);
}
function setCycle(){
	$('#slide').cycle({
		fx:     'scrollDown',
		easing: 'easeOutBounce', 
		delay:  -2000, 
		timeout: 8000
	})
	$('#destaque ul').cycle({
		fx:    'shuffle',
		easing: 'easeOutBack', 
		shuffle: {
			left: 265,
			top:-150
		},
		speed: 500,
		timeout: 8000
	})
}
function audiencia(){
	$.ajax({
		type:'post',
		url: window.location.href,
		dataType:'json',
		data:{'acao':'audiencia'},
		success: function (data){
			for(var i in data){
				$('#audiencia .'+i).html(data[i]);
			}
		}
	});
}
function in_array (needle, haystack, argStrict) {
    var key = '',
        strict = !! argStrict;
    if (strict) {
        for (key in haystack) {
            if (haystack[key] === needle) {
                return true;
            }
        }
    } else {
        for (key in haystack) {
            if (haystack[key] == needle) {
                return true;
            }
        }
    }
     return false;
}
function trim (str, charlist) {
	var whitespace, l = 0,
	i = 0;
	str += '';
	
	if(!charlist){
		whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
	}else{
		charlist += '';
		whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
	}
	
	l = str.length;
	for (i = 0; i < l; i++) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(i);
			break;
		}
	}
	
	l = str.length;
	for (i = l - 1; i >= 0; i--) {
		if (whitespace.indexOf(str.charAt(i)) === -1) {
			str = str.substring(0, i + 1);
			break;
		}
	}
	
	return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}
function verificaNumero(e) {
	if (e.which != 8 && e.which != 0 && (e.which < 48 || e.which > 57)) {
		return false;
	}
}
function aniload(a,b,c,d){
	if(d == undefined){
		var divload = '#imomeio';
	}else{
		var divload = d;
	}
	$(divload).animate({height:'0px'},500);
	$('#loader').fadeIn(250);
	setTimeout(function (){
		$(divload+' div').html('');
		$('#loader').fadeIn(250);
		if($.isFunction(b)){
			function nb(){
				$('#loader').fadeOut(250);
				$(divload).animate({height:$(divload).children().eq(0).innerHeight()+'px'},500);
				b();
			}
			nc = null;
		}else{
			nb = b;
			function nc(){
				$('#loader').fadeOut(250);
				$(divload).animate({height:$(divload).children().eq(0).innerHeight()+'px'},500);
				if($.isFunction(c)){
					c();
				}
			}
		}
		$(divload+' div').load(a,nb,nc);
	},500);
}
function forui(T,classe){
	if(T.parent(classe).length > 0){
		return true;
	}else{
		if(T.parent('html').length > 0){
			return false;
		}else{
			return forui(T.parent);
		}
	}
};
$(document).ready(function (){
	(setMasks = function (){
		jQuery(".data").datepicker({changeMonth: true,changeYear: true});
		jQuery(".dataniver").datepicker({changeMonth: true,changeYear: true,yearRange: "c-70:c+0"});
		jQuery(".data,.dataniver").mask('99/99/9999');
		jQuery(".hora").timepicker({});
		jQuery(".hora").mask('99:99:99');
		jQuery('.datatime').datetimepicker({changeMonth: true,changeYear: true});
		jQuery(".datatime").mask('99/99/9999 99:99:99');
		jQuery(".numero").keypress(verificaNumero);
		jQuery('.telefone').mask('(99)9999-9999');
		jQuery('.cep').mask('99999-999');
		jQuery('.cnpj').mask("99.999.999/9999-99");
		jQuery('.cpf').mask("999.999.999-99");
		jQuery('.rg').mask("99.999.999-*");
		jQuery('.dinhero').priceFormat();
		jQuery('.captcha6').mask("******");
	})();
	$('[obgcomp]').live('focus',function (){
		var t = $(this);
		if(t.val() == t.attr("obgcomp")){
			t.val('');
		}
	});
	$('[obgcomp]').live('blur',function (){
		var t = $(this);
		if(t.val() == ''){
			t.val(t.attr("obgcomp"));
		}		
	});
	$('form').live('submit',function (){
		var t = this;
		var Jt = $(this);
		var id = $(t).attr('id');
		var r = 0;
		$('#'+id+' [obg]').each(function (){
			if(r != 2){
				if($(this).val() == '' || $(this).attr("obgcomp") == $(this).val()){
					$(this).focus();
					alert('Preencha o campo "'+$(this).attr('obg')+'"!');
					r = 2;
				}
			}
		});
		$('#'+id+' [type="radio"][obg],#'+id+' [type="checkbox"][obg]').each(function (){
			if(r != 2){
				var name = $(this).attr('name');
				var obg = $(this).attr('obg');
				if($('#'+id+' [name="'+name+'"]:checked').length == 0){
					$(this).focus();
					alert('Escola uma opção em "'+obg+'"');
					r = 2;
				}
			}
		});
		$('#'+id+' [accept]').each(function (){
			var at = this;
			if(r != 2){
				var accepts = $(at).attr('accept').split('|');
				var val = $(at).val();
				var ext = $(at).val().split('.');
				ext = ext[ext.length-1];
				if(!in_array(ext,accepts) && val != ''){
					$(at).focus();
					alert('Extensão Inválida');
					r = 2;
				}
			}
		});
		$('#'+id+' .email').each(function (){
			if(r != 2){
				var val = $(this).val();
				var cars = 0;
				for(i=0;i<val.length;i++){
					if(in_array(val[i],caresp)){
						cars = 2;
					}
				}
				if(val == ''){
					// Não da alert
				}else if(val.indexOf('@') == -1 || val.indexOf('.') == -1 || val.indexOf('@.') != -1 || val.length < 6 || in_array(val.substr(-1),carsfim)){
					$(this).focus();
					alert('Email Inválido!');
					r = 2;
				}else if(cars == 2){
					$(this).focus();
					alert('Email com caracteres inválidos!');
					r = 2;
				}
			}
		});
		if(r != 2){
			if($('#'+id+' .senha').eq(0).val() != $('#'+id+' .senha').eq(1).val()){
				alert('As senhas não coincidem!');
				r = 2;
			}
		}
		if(r == 2){
			return false;
		}else{
			if (navigator.appName.indexOf('Microsoft') == -1){
				if(Jt.hasClass('fajx')){
					$('#loading').fadeIn(500);
					var serializejson = {};
					$.each(Jt.serializeArray(), function() {
						serializejson[this.name] = this.value;
					});
					$.ajax({
						url: Jt.attr('action'),
						type: Jt.attr('method'),
						dataType: 'html',
						data: $.extend({acaojquery:"RequestPagina"},serializejson),
						success: function (d){
							$('#fakemeio').html(d);
							history.pushState({ path: '/' }, '', Jt.attr('action'))
							setMasks();
							setCycle();
							audiencia();
							$('#fakemeio, #lateral-direita').attr({style:''});
							$('#loading').fadeOut(500);
						}
					});
					return false;
				}else{
					return true;
				}
			}else{
				return true;
			}
		}
	});
});