(function( $ ) {
  $.fn.LabelUtil = function() {
  	// デフォルトテキスト設定

  	// ラベル参照URL作成
  	var id = this.attr('id');
  	var url = '/label/data/' + id;
  	
  	// ラベル参照
	$.ajax({
		url: url,
		type: 'GET',
		timeout: 10000
	}).done(function (data, status, xhr) {
		var response = $.parseJSON(data);
		alert(response.result + ":" + response.data.length);

		if (response.result == 'OK' && response.data.length > 0) {
			alert(response.targetId + ':' + response.data[0].label);
			$('#' + response.targetId).text(response.data[0].label);
		}
	}).fail(function (xhr, status, error) {
		alert(xhr.status + ':' + xhr.statusText);
		alert(status + ':' + error);
	});

	// イベントバインド
	this.click(function (e) {
		if (event.shiftKey) {
			//alert('Click!');
			var ww = window.innerWidth;
			var wh = window.innerHeight;
			var dw = 400;
			var dh = 160;
			var dleft = (ww - dw) / 2;
			var dtop = (wh - dh) / 2;
			var options = 'top=' + dtop + ',left=' + dleft + ',width=' + dw + ',height=' + dh;
			var url = '/label/' + $(this).attr('id');
			window.open(url, 'labelDialog', options);
		}
	});

	return this;
  };
})( jQuery );
