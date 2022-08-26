// Slide every slideDelay seconds
const slideDelay = 5000;

const dynamicSlider = document.getElementById("slider");

let curSlide = 0;
window.setInterval(()=>{
    curSlide++;
    if (curSlide === dynamicSlider.childElementCount) {
        curSlide = 0;
    }

    // Actual slide
    dynamicSlider.firstElementChild.style.setProperty("margin-left", "-" + curSlide + "00%");
}, slideDelay);