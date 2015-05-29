riot.tag('demo-app', '<rg-sidemenu sidemenu="{ sidemenu }"></rg-sidemenu> <a href="#" onclick="{ toggleMenu }">Menu</a>', function(opts) {
		var _this = this;
		var items = [];

		for (var i = 0; i < 1000; i++) {
			items.push({ text: 'Item ' + i, action: itemClicked });
		}

		_this.sidemenu = {
			header: 'Side Menu',
			expanded: false,
			items: items
		};

		function itemClicked(e) {
			_this.sidemenu.expanded = false;
			console.log(e);
		}

		_this.toggleMenu = function () {
			_this.sidemenu.expanded = !_this.sidemenu.expanded;
		};
	
});