# How to Use Smartface Plugins ?

Smartface platform supports plugins. There are some ready to use plugins which are ready to use;

  - Facebook
  - Google Analytics
  - ImageCode
  - Parse
  - AdMob

Follow the steps below to be able to use plugins into your project;

  - Go to Config Folder and open ProjectConfig.JSON
  - Find the plugins definition.
  - Change the value ofactive key as true for related plugin.
   
Here is a sample code for activationg a plugin;

```javascript
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
```

### Related Guides For Plugins

Developing and Using Smartface Plugins - http://www.smartface.io/developer/guides/plugins/developing-smartface-plugins/

Developing Android (Java) Plugins for Smartface - http://www.smartface.io/developer/guides/plugins/developing-android-plugin/

Developing iOS (Objective-C) Plugins for Smartface - http://www.smartface.io/developer/guides/plugins/developing-ios-plugin/
