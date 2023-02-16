
(function($) {
  "use strict";

  jQuery(document).ready(function($) {
      
      
      // co accordion for mhs
      $('.accordiona').accordion();
      
      $(function () {
        $('.accordiona > li > a').first().click();
        $('.accordiona li ul li a').first().click();
        $('.accordiona li ul li ul li a').first().click();
        $('.accordiona li').each(function () {
            var parent = $(this).parent().parent();
            if (parent.is('li')) {
                parent.addClass("cc-plus");
            }
        })
      });
      // co accordion for mhs ends
      // tooltips starts
      $(function () {
        $('[data-toggle="tooltip"]').tooltip()
      })

  });
}(jQuery));