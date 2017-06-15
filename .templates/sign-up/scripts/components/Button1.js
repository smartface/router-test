/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Button1Design = require('library/Button1');

const Button1 = extend(Button1Design)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Button1Design.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Button1);

