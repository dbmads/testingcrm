function modalOnClick() {
    $('.modalClick').magnificPopup({
		closeOnContentClick: false,
		type: 'ajax',
		alignTop: true,
		overflowY: 'scroll', // as we know that popup content is tall we set scroll overflow by default to avoid jump
		ajax: {
			settings: null,
			cursor: 'mfp-ajax-cur', // CSS class that will be added to body during the loading (adds "progress" cursor)
			tError: '<a href="%url%">The content</a> could not be loaded.' //  Error message, can contain %curr% and %total% tags if gallery is enabled
		},
		callbacks: {
			parseAjax: function() {
				$('.mfp-content').addClass('white-popup');
			},
			ajaxContentAdded: function() {
				modalOnClick();
			}
		}
	});
}

function Alert(message){
    // Content will consist of the message and an ok button
    var message = $('<p />', {html: message}),
    ok = $('<button />', {text: 'Ok', 'class': 'full'});

    dialogue(message.add(ok), 'Alert!');
}

function dialogue(content, title) {
    var fullContent = $("<div/>");
    fullContent.addClass("white-popup");
    fullContent.append($("<div/>").addClass("ic-modal-title").text(title));
    var cont = $("<div/>").addClass("ic-modal-content");
    for (var i = 0; i < content.length; i++) {// in content) {
        cont.append(content.get(i));
    }
    cont.find(":button").addClass("mfp-close").addClass("mfp-close-ok");

    fullContent.append(cont);

    $.magnificPopup.open({
        //modal: true,
        closeOnContentClick: false,
        items: {
            //closeBtnInside: true,
            src: fullContent,
            type: 'inline'
        }
    }, 0);
}