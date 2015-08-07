/* login */
$(document).ready(function() {
	$('#ulSignInOrUp').tabs();
	$('#btnSignIn').button().click(function (event) {
		var uid = $('#txtUser').val();
		var pwd = $('#txtPass').val();
		Login.signIn(uid, pwd);
	});
	$('#btnSignUp').button().click(function (event) {
		var uid = $('#txtUserUp').val();
		var pwd = $('#txtPassUp').val();
		var pwdConf = $('#txtPassUpConfirm').val();
		var email = $('#txtEmailUp').val();
		if (pwd == pwdConf) {
			Login.signUp(uid, pwd, email);
		}
		else {
			alert('Password is not match.');
		}
	});

	// ラベル設定
	$('.tnLabel').each(function () {
		$(this).LabelUtil();
	});

	// blockui設定
	$(document).ajaxStart($.blockUI).ajaxStop($.unblockUI);
});
