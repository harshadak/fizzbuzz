function fizzBuzz() {
	var num = $('#inputValue').val();
	var numList = $('#list');

	for (var i = 1; i <= num; i++) {
		if (i%15 == 0) {
			numList.append('<p>FizzBuzz</p>');
		} else if (i%5 == 0) {
			numList.append('<p>Buzz</p>');
		} else if (i%3 == 0) {
			numList.append('<p>Fizz</p>');
		} else {
			numList.append(i);
		}
	}

	$('#inputValue').val('');
	//$('#list').('');
}





$(function() {
	$('#calculate').on('click', fizzBuzz);
});