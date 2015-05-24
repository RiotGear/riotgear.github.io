riot.tag('demo-app', '<rg-modal modal="{ modal }"> Modal body text </rg-modal> <button type="button" onclick="{ showModal }">Show modal</button>', function (opts) {
		var _this = this;
		_this.modal = {
			heading: 'Modal heading',
			visible: false,
			buttons: [
				{ action: buttonClicked, text: 'Save' },
				{ action: buttonClicked, text: 'Cancel', style: 'color: cornflowerblue;' }
			],
			onclose: function (e) {
				console.log('Closed');
				console.log(e);
			}
		};

		_this.showModal = function () {
			_this.modal.visible = true;
		};

		function buttonClicked(e) {
			console.log('Button clicked');
			console.log(e);
			_this.modal.visible = false;
		}
	
});