function init() {
    var elems = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.getInstance(elems);

    var materialBox = document.querySelectorAll('.materialboxed');
    var instance2 = M.Materialbox.init(materialBox);
}

init();