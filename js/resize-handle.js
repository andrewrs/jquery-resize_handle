document.addEventListener("DOMContentLoaded", function (event) {
  jQuery(document).ready(function ($) {
    $(function () {
      $("#resizeDiv").resizable({
        handles: {
          's': '#handle'
        }
      });
    });
  });
});
