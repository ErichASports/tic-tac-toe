$(function()  {


	$('.button').click(function(){
	    if ($('#r1c1').prop('checked'))
	    {
	      alert($(this).val());

	    }else if ($('#r1c2').prop('checked')) 
	    {
	    	alert($(this).val());
	    }
  });
});




