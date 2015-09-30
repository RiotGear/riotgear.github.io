riot.tag('demo-app', '<rg-select filter="true" placeholder="Please select a card" filter-placeholder="Filter cards" filter-on="text" onopen="{ opened }" onclose="{ closed }" onfilter="{ filtered }" onselect="{ selected }" options="{ cards }"> </rg-select>', function(opts) {

		var _this = this;

		_this.cards = [{
			id: 0,
			text: 'Visa'
		},{
			id: 1,
			text: 'MasterCard'
		},{
			id: 2,
			text: 'American Express'
		},{
			id: 3,
			text: 'Discover'
		}];

		_this.opened = function () {
			console.log('opened');
		};

		_this.closed = function () {
			console.log('closed');
		};

		_this.filtered = function () {
			console.log('filtering');
		};

		_this.selected = function (item) {
			console.log(item);
		};


});
