riot.tag('demo-app', '<rg-tags options="{ countries }" tags="{ tags }" type="text" placeholder="Enter a country name"></rg-tags>', function(opts) {
		var _this = this;
		_this.countries = [{
			text: 'England'
		}, {
			text: 'Scotland'
		}, {
			text: 'Wales'
		}, {
			text: 'Ireland'
		}];

		_this.tags = [{
			text: 'America'
		}];


});
