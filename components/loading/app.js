riot.tag('demo-app', '<rg-loading show="{ loading }"> Please wait... </rg-loading> <a href="#" onclick="{ showLoading }">Show loading</a>', function(opts) {
		var _this = this;
		_this.loading = false;

		_this.showLoading = function () {
			_this.loading = true;

			window.setTimeout(function () {
				_this.loading = false;
				_this.update();
			}, 3000);
		};
	
});