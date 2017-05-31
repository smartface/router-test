/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const ToolbarButtons = require('library/ToolbarButtons');
const Router = require("sf-core/ui/router");

const ToolbarButtons_ = extend(ToolbarButtons)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || ToolbarButtons.defaults );
		this.pageName = pageName;
		
		this.children.button1.onPress = onPress.bind(this, "page1");
		this.children.button2.onPress = onPress.bind(this, "page2");
		this.children.button3.onPress = onPress.bind(this, "page3");
	}
);

function onPress(page){
	Router.go(page);
}

module && (module.exports = ToolbarButtons_);
