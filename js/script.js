$(document).ready(function() {
	$('#para1').css({'font-size':'30px','font-weight':'600'});
	$('.box2').addClass('spin');

	$('#box1').click(function() {
		$('#box1').css('background', 'green');
	});
	$('#button1').click(function() {
		alert('WAZUUUUP!!!');
	});
	$('#box3').mouseover(function() {
		$('#box3').css('background', 'green');
	});
	$('#box3').mouseout(function() {
		$('#box3').css('background', 'red');
	});

	$('#input1').keyup(function(){
		var toLog = $('#input1').val();
		console.log(toLog);
	});
	$('#box4').click(function() {
		$('#box4').animate({'margin-left':'399px'}, 1000);
		$('#box4').animate({'margin-top':'149px'}, 1000);
	});

});