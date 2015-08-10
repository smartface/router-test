var item1 = {
	title: "My Item 1",
	icon: "icon.png", // Andrid 3.0- only
	itemType: SMF.UI.MenuItemType.destructive, //  iOS Optional Menu Only
	onSelected: function(e) {
		alert("First item is selected");
	}
};

var item2 = {
	title: "My Item 2",
	itemType: SMF.UI.MenuItemType.destructive, //  iOS Optional Menu Only
	onSelected: function(e) {
		alert("Second item is selected");
	}
};

var items = [item1, item2];

Menus.newMenu = new SMF.UI.Menu({
	menuStyle: SMF.UI.MenuStyle.contextualMenu,
	title: "Menu Title", // iOS Optional Menu Only
	icon: "menu_icon.png", // Android Context Menu Only
	items: items
});

Menus.newMenu2 = new SMF.UI.Menu({
	menuStyle: SMF.UI.MenuStyle.optionalMenu,
	title: "Menu Title", // iOS Optional Menu Only
	icon: "menu_icon.png", // Android Context Menu Only
	items: items
});

//    Use following commands to show menus
/*
Menus.newMenu.show();
Menus.newMenu2.show();
*/