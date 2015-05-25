riot.tag('demo-app', '<rg-toggle toggle="{ toggle }"></rg-toggle> <div class="hiddenMsg" show="{ toggle.checked }"> Hide / show panels are easy now! </div>', 'demo-app .hiddenMsg { margin: 30px 0; background-color: white; border: 1px solid #d4d4d4; padding: 30px; text-align: center; }', function(opts) {
		var _this = this;
		_this.toggle = {
			checked: false,
			ontoggle: toggled
		};

		function toggled(e) {
			console.log(e);
			_this.update(); // < this is important
		}
	
});