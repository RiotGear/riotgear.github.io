riot.tag('demo-app', '<rg-toast toasts="{ toasts }" position="bottomright"></rg-toast> <a href="#" onclick="{ addToast }">Add toast</a>', function(opts) {
		var _this = this;

		_this.toasts = [];

		_this.addToast = function () {
			_this.toasts.push({
				text: 'You have received an update to something interesting',
				onclick: function (e) {
					console.log(e);
				}
			});
		};
	
});
