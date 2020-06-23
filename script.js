<script type="text/javascript">
  $(function () {
    // Current menu highlighted
    var str = location.href.toLowerCase();
    $('.nav li a').each(function () {
      if (str.indexOf(this.href.toLowerCase()) > -1) {
        $("li.active").removeClass("active");
        $(this).parent().addClass("active");
      }
    });
    $('li.active').parents().each(function () {
      if ($(this).is('li')) {
        $(this).addClass("active");
      }
    });
    // ====================================================
  });
</script>
