/* labelDialog */
$(document).ready(function() {
	// ポジションニング
	$('#idLblCell').position({
		of: $('#idLblRow'),
		my: 'left center',
		at: 'left center'
	});

	// キャンセルイベント
	$('#btnCancel').click(function () {
		(window.open('', '_self').opener = window).close();
	});

	// 更新イベント
	$('#btnUpdate').click(function () {
		var orgid = $('#targetId').attr('value');
		var url = '/label/data/' + orgid;

		$.ajax({
			url: url,
			type: 'POST',
			data: {
				label: $('#dlgLabelLabelText').val()
			},
			timeout: 10000
		}).done(function (data, status, xhr) {
			var response = $.parseJSON(data);
			alert(response.result);
		}).fail(function (xhr, status, error) {
			alert(xhr.status + ':' + xhr.statusText);
			alert(status + ':' + error);
		});
	});
});
