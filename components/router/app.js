riot.tag('demo-app', '<p><a onclick="{ open }">Open the modal and watch the URL in your browser.</a></p> <rg-toast toasts="{ toasts }" position="bottomright"></rg-toast> <rg-modal modal="{ modal }"> <p> Refresh the browser and this modal will open on load </p> </rg-modal>', 'demo-app a, [riot-tag="demo-app"] a{ font-weight: bold; }', function(opts) {
  var _this = this;

  this.mixin('rg.router');
  this.router.add({
    name: 'open',
    url: 'open'
  });

  this.router.add({
    name: 'toast',
    url: 'toast'
  });

  this.open = function() {
    _this.router.go('open');
  };

  this.modal = {
    heading: 'Router example',
    ghost: true,
    close: true,
    onclose: function() {
	    _this.router.go('toast');
	  }
  };

	_this.toasts = [];

  this.router.on('go', function(state) {
    if (state.name == 'open') {
			_this.modal.visible = true;
			_this.toasts = [];
		} else {
			_this.modal.visible = false;
			 if (state.name == 'toast') {
				_this.toasts = [{
					text: 'Popups are just the start!! Refresh your browser again to see this toast.',
					sticky: true
				}];
			}
		}
		_this.update()
  });

	this.router.start();
});
