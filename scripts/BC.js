/*
 * This file is for the future Backward Compatiblility (BC) code support
 * Include this file in your project to minimize future change impact
 */
// Share BC
var Social = Social || {};
if (!Social.share) {
	Social.share = Device.share;
}
if (!Social.shareToFacebook) {
	Social.shareToFacebook = Facebook.share;
}
if (!Social.shareToTwitter) {
	Social.shareToTwitter = Twitter.share;
}
// Status Bar BC
Object.defineProperty(SMF.UI.Page.prototype, "showStatusBar", {
	get: function() {
		return this.statusBar.visible;
	},
	set: function(value) {
		this.statusBar.visible = value;
	}
});