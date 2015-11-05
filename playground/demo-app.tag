<demo-app>

  <p>
    Change the code in the editor below and see the output update instantly.
  </p>

  <a href="#" onclick="{ open }">&laquo; Open side menu &raquo;</a>

  <rg-sidemenu sidemenu="{ sidemenu }"></rg-sidemenu>

  <script>
    this.sidemenu = new RgSidemenu({
      header: 'Side Menu',
      isvisible: true,
      onselect: () => {
        this.sidemenu.isvisible = false
      },
      items: [{
        content: 'Item 1',
        action: function() {}
      }, {
        content: 'Item 2',
        action: function() {}
      }]
    })

    open() {
      this.sidemenu.isvisible = true
    }

  </script>

  <style scoped>
    a {
      font-weight: bold;
    }

  </style>

</demo-app>
