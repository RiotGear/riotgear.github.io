riot.tag('demo-app', '<rg-toast toasts="{ toasts }" position="bottomright"></rg-toast> <a href="#" onclick="{ addToast }">Add Toast</a> | <a href="#" onclick="{ addQuickToast }">Add Quick Toast</a> | <a href="#" onclick="{ addStickyToast }">Add Sticky Toast</a> | <a href="#" onclick="{ addSpawnToast }">Add Spawn Toast</a>', function(opts) {
		var _this = this;

		_this.toasts = [{
			text: 'You have received an update to something interesting',
			onclick: function (e) {
				console.log(e);
			}
		}];

		_this.addToast = function () {
			_this.toasts.push({
				text: 'You have received an update to something interesting',
				onclick: function (e) {
					console.log(e);
				}
			});
		};

		_this.addQuickToast = function () {
			_this.toasts.push({
				text: 'Hi.........bye!',
				timeout: 1500,
				onclick: function (e) {
					console.log(e);
				}
			});
		};

		_this.addStickyToast = function () {
			_this.toasts.push({
				text: 'This will stay on screen unless clicked on',
				sticky: true,
				onclick: function (e) {
					console.log(e);
				}
			});
		};

		_this.addSpawnToast = function () {
			_this.toasts.push({
				text: 'Close me to see another toast popup',
				sticky: true,
				onclick: function (e) {
					console.log(e);
				},
				onclose: function () {
					_this.addQuickToast();
				}
			});
		};
	
});
