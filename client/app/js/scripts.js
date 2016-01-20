// A $( document ).ready() block.
$( document ).ready(function() {
	/*$(".chatMessage").mouseover(function(){
		$("span").show();
	}).mouseleave(function(){
		$("span").hide();
	}); */
	//localStorage.setItem("TOKEN","NULL");
	if(localStorage.getItem("TOKEN")=="NULL")
	{
		$('#auth').modal({backdrop: 'static', keyboard: false});
		$("#login").click(function(){

			if($("#token").val()=='')
			{
				alert('token is required');
			}
			else
			{
				localStorage.setItem("TOKEN",$("#token").val());
				$('#auth').modal('hide');
			}
		});
	}
	else{

	}
});
