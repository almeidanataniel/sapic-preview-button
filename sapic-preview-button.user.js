// ==UserScript==
// @name         Preview Steam Background on Sapic
// @namespace    http://steamcommunity.com/id/theoddball/
// @version      1.1
// @description  Adds a Sapic preview button to Steam Market background listings
// @author       The Oddball
// @include      /http:\/\/steamcommunity\.com\/market\/listings\/753\/.*/
// @include      /https:\/\/steamcommunity\.com\/market\/listings\/753\/.*/
// @grant        none
// @downloadURL  https://theoddball.github.io/sapic-preview-button.user.js
// @updateURL    https://theoddball.github.io/sapic-preview-button.meta.js
// ==/UserScript==
var $ = $J;

function sapicButton() {
		var $viewFullLink = $("#largeiteminfo_item_actions").find("a");
		if ($viewFullLink.length) {
			var bgLink = $viewFullLink.attr('href');
			if (bgLink) {
				$viewFullLink.after('<a class="sapic_button btn_small btn_grey_white_innerfade" target="_blank" href="http://sapic.github.io/#' + bgLink + '"><span>Preview On Sapic</span></a>');
			}
        }
}
sapicButton();