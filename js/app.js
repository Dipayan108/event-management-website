// Sidenav
const sidenav = document.querySelector(".sidenav");
M.Sidenav.init(sidenav, {});

// Slider
const slider = document.querySelector(".slider");
M.Slider.init(slider, {
    indicators: true,
    height: 500,
    transition: 500,
    interval: 6000
});