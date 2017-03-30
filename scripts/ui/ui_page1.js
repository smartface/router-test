/* 
		WARNING 
		Auto generated file. 
		Do not modify it's contents.
*/

const extend = require('js-base/core/extend');
const Page = require('nf-core/ui/page');

const Label = require('nf-core/ui/label');
const TextAlignment = require('nf-core/ui/textalignment');
const Color = require('nf-core/ui/color');
const FlexLayout = require('nf-core/ui/flexlayout');
const Font = require('nf-core/ui/font');
const ImageView = require('nf-core/ui/imageview');
const Image = require('nf-core/ui/image');
const ImageFillType = require('nf-core/ui/imagefilltype');
const Button = require('nf-core/ui/button');


const Page1_ = extend(Page)(
	//constructor
	function(_super){
		// initalizes super class for this page scope
		_super(this, {
			onLoad: onLoad.bind(this)
		});
		
		var lbl = new Label({
			height: 90.45000000000002,
			visible: true,
			textAlignment: TextAlignment.MIDCENTER,
			backgroundColor: Color.create(0, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 255, 255, 255),
			borderRadius: 0,
			borderWidth: 0,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginLeft: 20,
			marginRight: 20
		});
		lbl.font = Font.create("Arial", 16, Font.NORMAL);
	
		var img = new ImageView({
			height: 60.3,
			image: Image.createFromFile("images://smartface.png"),
			imageFillType: ImageFillType.ASPECTFIT,
			visible: true,
			borderColor: Color.create(255, 255, 255, 255),
			borderWidth: 0,
			borderRadius: 0,
			alpha: 1,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginLeft: 20,
			marginRight: 20
		});
		
	
		var flexlayout = new FlexLayout({
			height: 130,
			visible: true,
			backgroundColor: Color.create(0, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 0, 0, 0),
			borderWidth: 0,
			alignContent: FlexLayout.AlignContent.STRETCH,
			alignItems: FlexLayout.AlignItems.STRETCH,
			justifyContent: FlexLayout.JustifyContent.FLEX_START,
			flexWrap: FlexLayout.FlexWrap.NOWRAP,
			flexDirection: FlexLayout.FlexDirection.COLUMN,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginLeft: 20,
			marginRight: 20
		});
		
	
		var btn = new Button({
			height: 60,
			text: "Click me!",
			visible: true,
			backgroundColor: Color.create(255, 0, 161, 241),
			textColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 255, 255, 255),
			borderRadius: 0,
			borderWidth: 0,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH
		});
		btn.font = Font.create("Arial", 16, Font.NORMAL);
	
		var btnNext = new Button({
			height: 60,
			text: "Next Page",
			visible: true,
			backgroundColor: Color.create(255, 0, 161, 241),
			textColor: Color.create(255, 255, 255, 255),
			alpha: 1,
			borderColor: Color.create(255, 255, 255, 255),
			borderWidth: 0,
			borderRadius: 0,
			positionType: FlexLayout.PositionType.RELATIVE,
			alignSelf: FlexLayout.AlignSelf.STRETCH,
			marginTop: 10
		});
		btnNext.font = Font.create("Arial", 16, Font.NORMAL);
	
		var children = {
			img: img,
			lbl: lbl,
			flexlayout: flexlayout
		};
		
		var orderedChildrenOfPage = [
			"img",
			"lbl",
			"flexlayout"
		];
		
		this.mapChildren = mapChildren.bind(this, orderedChildrenOfPage, children);
		
		var childrenOfflexlayout = {
			btn: btn,
			btnNext: btnNext
		};
		
		var orderedChildrenOfflexlayout = [
			"btn",
			"btnNext"
		];
		
		flexlayout.mapChildren = mapChildren.bind(flexlayout, orderedChildrenOfflexlayout, childrenOfflexlayout);
		
});

const mapChildren = function(ordersOfchildren, children, callback){
	callback = callback.bind(this);
	ordersOfchildren.map(function(child){
		callback(children[child], child);
	});
};

function onLoad() { 
    this.headerBar.title = "page1";
    this.headerBar.visible = true;
    this.statusBar.visible = true;
    this.layout.backgroundColor = Color.create("#EEEEEE");
    this.layout.flexDirection = FlexLayout.FlexDirection.COLUMN;
    this.layout.alignItems = FlexLayout.AlignItems.CENTER;
    this.layout.direction = FlexLayout.Direction.INHERIT;
    this.layout.flexWrap = FlexLayout.FlexWrap.NOWRAP;
    this.layout.justifyContent = FlexLayout.JustifyContent.SPACE_AROUND;
    //add components to page.
    this.mapChildren(function(component){
        if(component.mapChildren){
            addChild(component);
        }
        this.layout.addChild(component);
    });
}

//add child components to parent component.
function addChild(component){
    component.mapChildren(function(child){
        if(child.mapChildren){
            addChild(child);
        }
        this.addChild(child);
    });
}

module && (module.exports = Page1_);