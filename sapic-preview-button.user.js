// ==UserScript==
// @name         Preview Steam Background on Sapic
// @namespace    http://steamcommunity.com/id/theoddball/
// @version      2.1
// @description  Adds a Sapic preview button to Steam Market background listings
// @author       The Oddball
// @include      /http:\/\/steamcommunity\.com\/market\/listings\/753\/.*/
// @include      /http:\/\/steamcommunity\.com\/id\/.*\/inventory\/.*/
// @include      /https:\/\/steamcommunity\.com\/id\/.*\/inventory\/.*/
// @include      /https:\/\/steamcommunity\.com\/market\/listings\/753\/.*/
// @grant        none
// @downloadURL  https://theoddball.github.io/sapic-preview-button.user.js
// @updateURL    https://theoddball.github.io/sapic-preview-button.meta.js
// ==/UserScript==
var $ = $J;

function scmSapicButton() {
		var viewFullButton = $("#largeiteminfo_item_actions").find("a");
		if (viewFullButton.length) {
			var href = viewFullButton.attr('href');
			if (href) {
				viewFullButton.after('<a class="scm_sapic_button btn_small btn_grey_white_innerfade" target="_blank" href="http://sapic.github.io/#' + href + '"><span>Preview On Sapic</span></a>');
			}
        }
}
setInterval(function() {
		var itemActions = $(".inventory_iteminfo").find(".item_desc_content").find(".item_desc_description").find("#iteminfo1_item_actions");
        var viewFullButton = $(itemActions).find("a").first();
		if (viewFullButton.length) {
			var bgLink = /public\/images\/items/.test($(viewFullButton).attr("href"));
            var href = viewFullButton.attr('href');
			if (bgLink && !(itemActions).find(".inv_sapic_button:not(#iteminfo0_item_actions)").length) {
				viewFullButton.after('<a class="inv_sapic_button btn_small btn_grey_white_innerfade" target="_blank" href="http://sapic.github.io/#' + href + '"><span>Preview On Sapic</span></a>');
			}
        }
}, 200);
setInterval(function() {
		var itemActions = $(".inventory_iteminfo").find(".item_desc_content").find(".item_desc_description").find("#iteminfo0_item_actions");
        var viewFullButton = $(itemActions).find("a").first();
		if (viewFullButton.length) {
			var bgLink = /public\/images\/items/.test($(viewFullButton).attr("href"));
            var href = viewFullButton.attr('href');
			if (bgLink && !(itemActions).find(".inv_sapic_button:not(#iteminfo1_item_actions)").length) {
				viewFullButton.after('<a class="inv_sapic_button btn_small btn_grey_white_innerfade" target="_blank" href="http://sapic.github.io/#' + href + '"><span>Preview On Sapic</span></a>');
			}
        }
}, 200);
scmSapicButton();
