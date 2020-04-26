$(function () {
  window.onload = (e) => {
    window.addEventListener('message', (event) => {
      const item = event.data;
      if (item.display) {
        $("#container").show();
        $("body").addClass('bg-darken');
      } else {
        $("#container").hide();
        $("body").removeClass('bg-darken');
      }
    });
  };
});