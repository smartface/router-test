/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');
const Flexlayout1 = require('library/Flexlayout1');

const Flexlayout1_ = extend(Flexlayout1)(
	//constructor
	function(_super, props, pageName){
		
		// initalizes super class for this scope
		_super(this, props || Flexlayout1.defaults);
		this.name = "flexlayout1";
		// console.log(JSON.stringify(props));
		
		this.children.button1.onPress = function(){
			this.onPress && this.onPress.call(this);
		}.bind(this);
		
	}
);

module && (module.exports = Flexlayout1_);
