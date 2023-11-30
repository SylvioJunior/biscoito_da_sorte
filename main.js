function openCookie() {
    setTimeout(function() {
        document.querySelector(".screen-01").classList.add("hide");
        document.querySelector(".screen-02").classList.remove("hide");
    }, 2000);
}

function openNewCookie() {
    document.querySelector(".screen-01").classList.remove("hide");
    document.querySelector(".screen-02").classList.add("hide");
}