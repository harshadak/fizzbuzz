function fizzBuzz() {
    var num = $('#inputValue').val();

    for (var i = 1; i <= num; i++) {
        if (i % 15 == 0) {
            $('#list').append('<li class="answer">' + "FizzBuzz" + '</li>');
        } else if (i % 5 == 0) {
            $('#list').append('<li class="answer">' + "Buzz" + '</li>');
        } else if (i % 3 == 0) {
            $('#list').append('<li class="answer">' + "Fizz" + '</li>');
        } else {
            $('#list').append('<li class="answer">' + i + '</li>');
        }
    }
}

function clearList() {
    $('#list').empty();
    $('#inputValue').val('');
}

$(document).ready(function () {
    $('#calculate').on('click', fizzBuzz);
    $('#clear').on('click', clearList);
});
