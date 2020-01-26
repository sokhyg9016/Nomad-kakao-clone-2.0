window.onscroll = () => {
    myFunction();
}

function myFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("fixedMenu").className = "header-wrapper-box-shadow";
    } else {
        document.getElementById("fixedMenu").className = "header-wrapper";
    }
}