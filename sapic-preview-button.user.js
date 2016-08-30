// ==UserScript==
// @name         Preview Steam Background on Sapic
// @namespace    http://oddball.tf
// @version      2.5
// @description  Adds a Sapic preview button to Steam Market background listings
// @author       The Oddball
// @include      /http:\/\/steamcommunity\.com\/.*/
// @include      /https:\/\/steamcommunity\.com\/.*/
// @grant        none
// @downloadURL  https://github.com/theoddball/sapic-preview-button/raw/master/sapic-preview-button.user.js
// @updateURL    https://github.com/theoddball/sapic-preview-button/raw/master/sapic-preview-button.meta.js
// ==/UserScript==
var $ = $J;

function scmSapicButton() {
    var viewFullButton = $("#largeiteminfo_item_actions").find("a");
    if (viewFullButton.length) {
        var href = viewFullButton.attr('href');
        var bgLink = /public\/images\/items/.test($(viewFullButton).attr("href"));
        if (bgLink) {
            viewFullButton.after('<a class="scm_sapic_button btn_small btn_grey_white_innerfade" target="_blank" href="https://steam.design/#' + href + '"><span>Preview on Sapic</span></a>');
        }
    }
}
function invSapicButton(){
    setInterval(function() {
        var itemActions = $(".inventory_iteminfo").find(".item_desc_content").find(".item_desc_description").find("#iteminfo1_item_actions");
        var viewFullButton = $(itemActions).find("a").first();
        if (viewFullButton.length) {
            var bgLink = /public\/images\/items/.test($(viewFullButton).attr("href"));
            var href = viewFullButton.attr('href');
            if (bgLink && !(itemActions).find(".inv_sapic_button:not(#iteminfo0_item_actions)").length) {
                viewFullButton.after('<a class="inv_sapic_button btn_small btn_grey_white_innerfade" target="_blank" href="https://steam.design/#' + href + '"><span>Preview on Sapic</span></a>');
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
				viewFullButton.after('<a class="inv_sapic_button btn_small btn_grey_white_innerfade" target="_blank" href="https://steam.design/#' + href + '"><span>Preview on Sapic</span></a>');
			}
        }
    }, 200);
}
function settingsSapicButton(){
    setInterval(function() {
        var url = $("#profile_background_current_image").attr("src");
        var sapicButton = $(".settings_sapic_button");
        url = url.replace("?size=140x90&v=2", "");

        $(".background_selector_launch_area").find(".btn_grey_white_innerfade.btn_small").first().before('<a class="settings_sapic_button btn_small btn_grey_white_innerfade" target="_blank" href="https://steam.design/#' + url + '"><span>Preview on Sapic</span></a>');
        sapicButton.remove();
    }, 200);
}
settingsSapicButton();
scmSapicButton();
invSapicButton();


