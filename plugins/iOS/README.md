# How to Use Smartface Plugins ?

Smartface platform supports plugins. There are some ready to use plugins which are;

  - Facebook ( Android / iOS )
  - Google Analytics ( Android / iOS )
  - ImageCode ( Android / iOS )
  - Parse ( Android )
  - AdMob ( iOS )

Follow the steps below to be able to use plugins into your project;

  - Go to Config Folder and open ProjectConfig.JSON
  - Find the plugins definition.
  - Change the value ofactive key as true for related plugin.
   
Here is a sample code for activating a plugin;

```javascript
			"ios": {
				"scripts": "scripts",
				"images": "images/iOS",
				"assets": "assets",
				"infoPlist": "config/iOS/Info.plist",
				"urlIdentifier": "",
				"urlSchemes": "",
				"plugins": {
					"facebookios": {
						"url": "https://smartfacecdn.blob.core.windows.net/smartface-bin/plugins/Facebook/iOS/1.0.0/FacebookiOS.zip",
						"path": "plugins/iOS/FacebookiOS.zip",
						"active": true
					},
					"googleanalyticsplugin-ios": {
						"url": "https://smartfacecdn.blob.core.windows.net/smartface-bin/plugins/GoogleAnalytics/iOS/1.0.0/GoogleAnalyticsiOS.zip",
						"path": "plugins/iOS/GoogleAnalyticsiOS.zip",
						"active": false
					},
					"admob-ios": {
						"url": "https://smartfacecdn.blob.core.windows.net/smartface-bin/plugins/AdMob/iOS/1.0.0/AdmobiOS.zip",
						"path": "plugins/iOS/AdmobiOS.zip",
						"active": false
					},
					"codereaderios": {
						"url": "https://smartfacecdn.blob.core.windows.net/smartface-bin/plugins/CodeReader/iOS/1.0.0/CodeReaderiOS.zip",
						"path": "plugins/iOS/CodeReaderiOS.zip",
						"active": false
					}
				}
			},
			"android": {
				"scripts": "scripts",
				"images": "images/Android",
				"assets": "assets",
				"manifest": "config/Android/AndroidManifest.xml",
				"packageProfiles": "config/Android/PackageProfiles.xml",
				"sign": {
					"keystoreFile": "config/Android/smfdefault.keystore",
					"keystorePass": "smartface",
					"aliasName": "smartface",
					"keyPass": "smartface"
				},
				"plugins": {
					"facebook": {
						"url": "https://smartfacecdn.blob.core.windows.net/smartface-bin/plugins/Facebook/Android/1.0.0/FacebookAndroid.zip",
						"path": "plugins/Android/FacebookAndroid.zip",
						"active": true
					},
					"googleanalytics": {
						"url": "https://smartfacecdn.blob.core.windows.net/smartface-bin/plugins/GoogleAnalytics/Android/1.0.0/GoogleAnalyticsAndroid.zip",
						"path": "plugins/Android/GoogleAnalyticsAndroid.zip",
						"active": false
					},
					"smfimagecode": {
						"url": "https://smartfacecdn.blob.core.windows.net/smartface-bin/plugins/CodeReader/Android/1.0.0/CodeReaderAndroid.zip",
						"path": "plugins/Android/CodeReaderAndroid.zip",
						"active": false
					},
					"smfparse": {
						"url": "https://smartfacecdn.blob.core.windows.net/smartface-bin/plugins/Parse/Android/1.0.0/ParseAndroid.zip",
						"path": "plugins/Android/ParseAndroid.zip",
						"active": false
					}
				}
			}
```


Please check the link if you interested about developing and using Smartface Plugins;

http://www.smartface.io/developer/guides/#plugin
