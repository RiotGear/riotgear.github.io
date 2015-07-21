riot.tag('demo-app', '<rg-modal modal="{ modal }"> <p>To make the modal appear or disappear simply toggle the modal\'s <code>visible</code> property.</p> <pre><code>this.modal.visible = true|false;</code></pre> </rg-modal> <rg-modal modal="{ ghostModal }"> <p>This is like a normal modal but without a body!</p> </rg-modal> <a href="#" onclick="{ showModal }">Show modal</a> | <a href="#" onclick="{ showGhostModal }">Show ghost modal</a>', function(opts) {
		var _this = this;
		_this.modal = {
			heading: 'rg-modal',
			visible: true,
			buttons: [
				{
					action: function () {
						_this.modal.visible = false;
					}, text: 'Ok', style: 'color: white; background-color: #1fadc5; border-radius: 3px;'
				},
				{
					action: function () {
						_this.modal.visible = false;
					}, text: 'Cancel'
				}
			]
		};

		_this.ghostModal = {
			heading: 'Ghost Modal',
			ghost: true,
			close: false,
			buttons: [
				{
					action: function () {
						_this.ghostModal.visible = false;
					}, text: 'Ok', style: 'color: white; background-color: #1fadc5; border-radius: 3px;'
				},
				{
					action: function () {
						_this.ghostModal.visible = false;
					}, text: 'Cancel'
				}
			]
		};


		_this.showModal = function () {
			_this.modal.visible = true;
		};

		_this.showGhostModal = function () {
			_this.ghostModal.visible = true;
		};
	
});