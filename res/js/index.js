function init() {
    var elems = document.querySelectorAll('.sidenav');
    var instance = M.Sidenav.getInstance(elems);

    var materialBox = document.querySelectorAll('.materialboxed');
    var instance2 = M.Materialbox.init(materialBox);
}

init();

function openNav() {
    document.getElementById("mySidenav").style.marginLeft = "105%";
    document.getElementById("mySidenav").style.width = "65%";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
}