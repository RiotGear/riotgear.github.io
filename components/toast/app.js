riot.tag('demo-app', '<rg-toast toasts="{ toasts }" position="topright"></rg-toast> <a href="#" onclick="{ addToast }">Add Toast</a> | <a href="#" onclick="{ addQuickToast }">Add Quick Toast</a> | <a href="#" onclick="{ addStickyToast }">Add Sticky Toast</a> | <a href="#" onclick="{ addSpawnToast }">Add Spawn Toast</a>', function(opts) {
		var _this = this;

		_this.toasts = [{
			content: 'You have received an update to something interesting',
			onclick: function (e) {
				console.log(e);
			}
		}];

		_this.addToast = function () {
			_this.toasts.push({
				content: 'You have received an update to something interesting',
				onclick: function (e) {
					console.log(e);
				}
			});
		};

		_this.addQuickToast = function () {
			_this.toasts.push({
				content: 'Hi.........bye!',
				timeout: 1500,
				onclick: function (e) {
					console.log(e);
				}
			});
		};

		_this.addStickyToast = function () {
			_this.toasts.push({
				content: 'This will stay on screen unless clicked on',
				sticky: true,
				onclick: function (e) {
					console.log(e);
				}
			});
		};

		_this.addSpawnToast = function () {
			_this.toasts.push({
				content: 'Close me to see another toast popup',
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
