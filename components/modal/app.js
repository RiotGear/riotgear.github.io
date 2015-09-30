riot.tag('demo-app', '<rg-modal heading="{ modal.heading }" onclose="{ modal.onclose }" visible="{ modal.visible }" dismissable="{ modal.dismissable }" buttons="{ modal.buttons }"> <p>To make the modal appear or disappear simply toggle the modal\'s <code>visible</code> property.</p> <pre><code>this.visible = true|false;</code></pre> </rg-modal> <rg-modal heading="{ ghostModal.heading }" onclose="{ ghostModal.onclose }" ghost="true" visible="{ ghostModal.visible }" buttons="{ ghostModal.buttons }"> <p>This is like a normal modal but without a body!</p> </rg-modal> <a href="#" onclick="{ showModal }">Show modal</a> | <a href="#" onclick="{ showGhostModal }">Show ghost modal</a>', function(opts) {
		var _this = this;
		_this.modal = {
			heading: 'rg-modal',
			visible: true,
			onclose: function () {
				_this.modal.visible = false;
			},
			buttons: [
				{
					action: function () {
						_this.modal.visible = false;
					}, content: 'Ok', style: 'color: white; background-color: #1fadc5; border-radius: 3px;'
				},
				{
					action: function () {
						_this.modal.visible = false;
					}, content: 'Cancel'
				}
			]
		};

		_this.ghostModal = {
			heading: '<strong><em>Ghost</em></strong> Modal',
			ghost: true,
			close: false,
			onclose: function () {
				_this.ghostModal.visible = false;
			},
			buttons: [
				{
					action: function () {
						_this.ghostModal.visible = false;
					}, content: 'Ok', style: 'color: white; background-color: #1fadc5; border-radius: 3px;'
				},
				{
					action: function () {
						_this.ghostModal.visible = false;
					}, content: 'Cancel'
				}
			]
		};


		_this.showModal = function () {
			_this.modal.visible = true
		};

		_this.showGhostModal = function () {
			_this.ghostModal.visible = true
		};

});
