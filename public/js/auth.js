$(document).ready(function () {
	$('#form-signin').submit(function (e) {
		e.preventDefault();

		let email = $('#signinEmail').val().trim();
		let password = $('#signinPassword').val().trim();
		let validEmail;
		let validPassword;

		$(".error").remove();

		if (email.length < 1) {
			$('#signinEmail').after('<span class="error">This field is required!</span>');
		} else {
			const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			validEmail = regex.test(email);

			if (!validEmail) {
				$('#signinEmail').after('<span class="error">Enter a valid email!</span>');
			}
		}

		if (password.length < 10) {
			$('#signinPassword').after('<span class="error">Password must be at least 10 characters long!</span>');
		} else {
			let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
			validPassword = regex.test(password);

			if (!validPassword) {
				$('#signinPassword').after('<span class="error">You need minimum 10 characters, at least one uppercase letter, one lowercase letter and one number.</span>');
			}
		}

		if (validEmail && validPassword) {
			let url = window.location.href;
			url = url.substring(0, url.lastIndexOf('/'));
			url = url.substring(0, url.lastIndexOf('/'));
			window.location.href = url;
		}
	});

	$('#form-signup').submit(function (e) {
		e.preventDefault();

		let firstName = $('#firstNameSignup').val().trim();
		let lastName = $('#lastNameSignup').val().trim();
		let username = $('#usernameSignup').val().trim();
		let email = $('#emailSignup').val().trim();
		let password = $('#passwordSignup').val().trim();
		let tosCheck = $('#customCheck2:checkbox:checked').length > 0;

		let validEmail;
		let validPassword;



		$(".error").remove();

		if (firstName.length < 1) {
			$('#firstNameSignup').after('<span class="error">This field is required!</span>');
		}

		if (lastName.length < 1) {
			$('#lastNameSignup').after('<span class="error">This field is required!</span>');
		}

		if (username.length < 3) {
			$('#usernameSignup').after('<span class="error">Username must be at least 3 characters long!</span>');
		}

		if (!tosCheck) {
			$('#tos-check').after('<span class="error">You must accept Terms of Use!</span>');
		}

		if (email.length < 1) {
			$('#emailSignup').after('<span class="error">This field is required!</span>');
		} else {
			const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
			validEmail = regex.test(email);

			if (!validEmail) {
				$('#emailSignup').after('<span class="error">Enter a valid email!</span>');
			}
		}

		if (password.length < 10) {
			$('#passwordSignup').after('<span class="error">Password must be at least 10 characters long!</span>');
		} else {
			let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{10,}$/;
			validPassword = regex.test(password);

			if (!validPassword) {
				$('#passwordSignup').after('<span class="error">You need minimum 10 characters, at least one uppercase letter, one lowercase letter and one number.</span>');
			}
		}

		if (validEmail && validPassword) {
			let url = window.location.href;
			url = url.substring(0, url.lastIndexOf('/'));
			url = url.substring(0, url.lastIndexOf('/'));
			window.location.href = url;
		}
	});
});
