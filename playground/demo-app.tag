<demo-app>

  <p>
    Change the code in the editor below and see the output update instantly.
  </p>

  <a href="#" onclick={ open }>Side menu demo</a>

  <rg-sidemenu sidemenu="{ sidemenu }"></rg-sidemenu>

  <script>
    this.sidemenu = {
      header: 'Playground',
      items: [
        { text: 'Item 1', action: function () {} },
        { text: 'Item 2', action: function () {} }
      ]
    };

    this.open = function () {
      this.sidemenu.expanded = true;
    }
  </script>

</demo-app>
