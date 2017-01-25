var page2 = require('../ui/page2');
module.exports = page2;

page2.onKeyPress = page2_onKeyPress;

page2.btn.onPressed = function(e) {
    Pages.back();
};

function page2_onKeyPress(e) {
    if (e.keyCode === 4) {
        Pages.back();
    }
}
