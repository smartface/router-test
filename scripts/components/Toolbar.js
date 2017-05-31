/* 
		You can modify its contents.
*/
const extend = require('js-base/core/extend');

const Toolbar = require('library/Toolbar');

const Toolbar_ = extend(Toolbar)(
	//constructor
	function(_super, props, pageName){
		// initalizes super class for this scope
		_super(this, props || Toolbar.defaults );
		this.pageName = pageName;
	}
	
);

module && (module.exports = Toolbar_);

