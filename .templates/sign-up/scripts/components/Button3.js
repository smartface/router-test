/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Button3Design = require('library/Button3');

const Button3 = extend(Button3Design)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Button3Design.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Button3);

