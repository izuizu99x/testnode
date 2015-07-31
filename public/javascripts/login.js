/* login */
var Login = (function () {
	var _login = false;
	var _loginToken = null;

	function _init() {
		_loginToken = sessionStorage.loginToken;
		if (_loginToken) {
			_login = true;
		}
	}

	function _signIn(uid, pwd) {
		$.ajax({
			url: '/users/login/',
			type: 'POST',
			data: {
				uid: uid,
				pwd: pwd
			},
			timeout: 10000
		}).done(function (data, status, xhr) {
			alert(data);
		}).fail(function (xhr, status, error) {
			alert(xhr.status + ':' + xhr.statusText);
			alert(status + ':' + error);
		});
	}

	function _signUp(uid, pwd, email) {
		$.ajax({
			url: '/users/signup/',
			type: 'POST',
			data: {
				uid: uid,
				pwd: pwd,
				email: email
			},
			timeout: 10000
		}).done(function (data, status, xhr) {
			alert(data);
		}).fail(function (xhr, status, error) {
			alert(xhr.status + ':' + xhr.statusText);
			alert(status + ':' + error);
		});
	}

	_init();

	return {
		signIn: _signIn,
		signUp: _signUp
	};
}());
