$(function(){
	$('ul').append('<li>item leonel</li>');

	$('#remover').bind('click', function(){
		$('ul li:eq(5)').remove();
	})
});

function adicionar() {
	var ing = document.getElementById('ingrediente').value;
	var listahtml = document.getElementById('lista').innerHTML;

	listahtml = listahtml+"<li>"+ing+"</li>";

	document.getElementById('lista').innerHTML = listahtml;
}
	
