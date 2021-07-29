document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.sidenav');
    var instances = M.Sidenav.init(elems);
    var elems = document.querySelectorAll('.tap-target');
    var instances = M.TapTarget.init(elems);
    var elems = document.querySelectorAll('.parallax');
    var instances = M.Parallax.init(elems, {});
  });