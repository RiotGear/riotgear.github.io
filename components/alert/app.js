riot.tag('demo-app', '<div class="add-buttons"> <a href="#" onclick="{ addAlert }">Add alert</a> | <a href="#" onclick="{ addTimeoutAlert }">Add timeout alert</a> | <a href="#" onclick="{ addStickyAlert }">Add sticky alert</a> </div> <div class="alert-container"> <rg-alert alerts="{ alerts }"></rg-alert> </div>', 'demo-app .alert-container, [riot-tag="demo-app"] .alert-container{ position: relative; padding-top: 15px; }', function(opts) {
		var _this = this;
		_this.alerts = [{
			type: 'danger',
			msg: 'Danger! Something bad happened.',
			onclick: function () {
				console.log('Danger clicked');
			},
			onclose: function () {
				console.log('Danger closed');
			}
		}, {
			type: 'success',
			msg: 'Success! You read this important alert message.',
			onclick: function () {
				console.log('Success clicked');
			},
			onclose: function () {
				console.log('Success closed');
			}
		}, {
			type: 'warning',
			msg: 'Warning! Something might go wrong.',
			onclick: function () {
				console.log('Warning clicked');
			},
			onclose: function () {
				console.log('Warning closed');
			}
		}];

		_this.addAlert = function () {
			_this.alerts.push({
				type: 'information',
				msg: 'Information! Just so you know....',
				onclick: function () {
					console.log('Information clicked');
				},
				onclose: function () {
					console.log('Information closed');
				}
			});
		};

		_this.addTimeoutAlert = function () {
			_this.alerts.push({
				type: 'success',
				timeout: 2000,
				msg: 'Well done! This will disappear automatically...',
				onclick: function () {
					console.log('Well done clicked');
				},
				onclose: function () {
					console.log('Well done closed');
				}
			});
		};

		_this.addStickyAlert = function () {
			_this.alerts.push({
				type: 'warning',
				dismissable: false,
				msg: 'You can not dismiss this alert',
				onclick: function () {
					console.log('Dismissable clicked');
				}
			});
		};
	
});