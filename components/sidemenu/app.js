riot.tag('demo-app', '<rg-sidemenu header="{ sidemenu.header }" visible="{ sidemenu.visible }" items="{ sidemenu.items }" onclose="{ sidemenu.onclose }"></rg-sidemenu> <a href="#" onclick="{ toggleMenu }">Menu</a>', function(opts) {
  var _this = this;
  var items = [];

  for (var i = 0; i < 1000; i++) {
    items.push({
      content: 'Item <strong>' + i + '</strong>',
      action: itemClicked
    });
  }

  items[10].active = true;

  _this.sidemenu = {
    header: 'Side Menu',
    visible: false,
    items: items,
    onclose: function() {
      _this.sidemenu.visible = false;
    }
  };

  function itemClicked(e) {
    _this.sidemenu.visible = false;
    console.log(e);
  }

  _this.toggleMenu = function() {
    _this.sidemenu.visible = !_this.sidemenu.visible;
  };

});
