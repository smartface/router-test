/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Button2Design = require('library/Button2');

const Button2 = extend(Button2Design)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Button2Design.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Button2);

