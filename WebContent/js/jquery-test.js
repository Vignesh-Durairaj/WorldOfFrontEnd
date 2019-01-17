function say_hello() {
	textVal = $('#myText').val()
	if (textVal) {
		alert('Hello ' + textVal)
	} else {
		alert('Hello World !')
	}
}

function change_content() {
	$('#myDiv1').html('<b>New Value</b>');
}

function change_attr() {
	$('.dark').attr('class','light');
	$('a').removeAttr('href');
	$('a.newLink').attr('href', 'https://www.sc.com/in/');
}

function ammend() {
	$('#myDiv2').append(' Another Value appended');
	$('#myDiv2').prepend('Hi! ');
	$('#myDiv2').before('<hr style="border-top: 2px solid orange;"/>');
	$('#myDiv2').after('<hr style="border-top: 2px solid green;"/>');
}