let fixed = document.getElementById("navbarSupportedContent");

window.onscroll = function () {
    if (window.scrollY >= 850) {
        fixed.style.position = "fixed"
        fixed.style.zIndex = "10"
        fixed.style.backgroundColor="#101828"
        fixed.style.width="100%"
        fixed.style.marginTop = "-30px"
        fixed.style.marginLeft = "-12px"
        fixed.style.padding = "20px"
        fixed.style.borderRadius = "30px"
    }
    else {
        fixed.style.marginTop = "0"
        fixed.style.position = "static"
        fixed.style.background="none"
    }
};