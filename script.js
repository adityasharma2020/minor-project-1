const registerForm = document.getElementById('registrationForm');
const submitNote = document.getElementById('submitNote');

console.log(registerForm.style.display);
registerForm.addEventListener('submit', function (e) {
	e.preventDefault();

	registerForm.style.display = 'none';
	submitNote.style.display = 'block';
});
