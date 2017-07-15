var input = document.querySelector('input');
var h2 = document.querySelector('h2');

input.addEventListener('input', function(e) {
	var value = e.target.value;

	h2.innerText = 'Hello, ' + value + '!';
})