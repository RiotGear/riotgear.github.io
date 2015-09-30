<demo-app>

  <p>
    Change the code in the editor below and see the output update instantly.
  </p>

  <a href="#" onclick={ open }>&laquo; Open side menu &raquo;</a>

  <rg-sidemenu header="Playground" items="{ items }" visible="{ visible }"></rg-sidemenu>

  <script>
    this.items = [{
      text: 'Item 1',
      action: function() {}
    }, {
      text: 'Item 2',
      action: function() {}
    }]

    open() {
      this.visible = true
      this.update()
    }

  </script>

  <style scoped>
    a {
      font-weight: bold;
    }

  </style>

</demo-app>
