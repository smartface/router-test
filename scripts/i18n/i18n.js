// some code to load related lang keys & values
// load device.lang
// if it fails load en
// if it fails load default min keys & values embeded in this file.
// Required for BC
var lang = {};

SMF.i18n = {
	currentLang: null,
	defaultLang: 'en',
	languageKV: {},
	get: function(key, languageCode) {
		languageCode = languageCode || this.currentLang;
		if (typeof this.languageKV[languageCode] === 'undefined') {
			return '';
		}
		return this.languageKV[languageCode][key];
	},
	defineLanguage: function(languageCode, obj) {
		this.languageKV[languageCode] = obj;
	},
	switchLanguage: function(languageCode) {
		if (typeof this.languageKV[languageCode] === 'undefined') {
			if (typeof this.languageKV[this.defaultLang] === 'undefined') {
				var languageCodes = Object.keys(this.languageKV);
				if (languageCodes.length === 0) {
					return;
				}
				// In case default options did not work, pick the first one.
				this.switchLanguage(languageCodes[0]);
			} else {
				this.switchLanguage(this.defaultLang);
			}
		}
		this.currentLang = languageCode;
		lang = this.languageKV[languageCode];
	}
};

include('i18n/de.js');
include('i18n/en.js');
include('i18n/fi.js');
include('i18n/tr.js');

SMF.i18n.switchLanguage(Device.language);