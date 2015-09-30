riot.tag('demo-app', '<rg-toggle checked="{ toggle.checked }" ontoggle="{ toggle.ontoggle }"></rg-toggle> <div class="hiddenMsg" show="{ showPanel }"> Hide / show panels are easy now! </div>', 'demo-app .hiddenMsg { margin: 30px 0; background-color: white; border: 1px solid #d4d4d4; padding: 30px; text-align: center; }', function(opts) {
		var _this = this;
		_this.showPanel =  false;
		_this.toggle = {
			checked: false,
			ontoggle: toggled
		};

		function toggled(checked) {
			_this.toggle.checked = checked;
			_this.showPanel = checked;
			_this.update();
		}
});
