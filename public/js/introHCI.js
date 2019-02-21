'use strict';

// Call this function when the page loads (the "ready" event)
$(document).ready(function() {
	initializePage();
});

/*
 * Function that is called when the document is ready.
 */
function initializePage() {
	$(".likeBtn").click(recordLike);
}

function recordLike(e) {
	e.preventDefault();
	ga("create", "UA-134838812-1", "auto");
	ga("send", "event", "like", "click")
}
