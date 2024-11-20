const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-menu");
    const hamburgerBtnFloating = document.getElementById(
        "hamburger-menu-floating"
    );
    const nav = document.getElementById("nav");
    const viewResumeBtn = document.getElementById("view-resume-btn");
    const closeResumeBtn = document.getElementById("close-resume-btn");
    const fitResumeBtn = document.getElementById("fit-resume-btn");
    const zoominResumeBtn = document.getElementById("zoomin-resume-btn");
    const zoomoutResumeBtn = document.getElementById("zoomout-resume-btn");

    // Mobile Menu
    const toggleMenu = () => {
        nav.classList.toggle("show-drawer");
        nav.classList.toggle("hidden");
        nav.classList.toggle("block");
        hamburgerBtn.classList.toggle("toggle-btn");
        hamburgerBtn.children[0].classList.toggle("group-hover:bg-theme-red-500");
        hamburgerBtnFloating.classList.toggle("toggle-btn");
        hamburgerBtnFloating.children[0].classList.toggle(
            "group-hover:bg-theme-red-500"
        );
        document.querySelector("body").classList.toggle("overflow-hidden");
        console.log("mujhy bulaya");
    };

    hamburgerBtn.addEventListener("click", toggleMenu);
    nav.addEventListener("click", () => {
        if (nav.classList.contains("show-drawer")) {
            toggleMenu();
        }
    });
    hamburgerBtnFloating.addEventListener("click", toggleMenu);

    // Sticky Navbar
    window.onscroll = function () {
        scroll();
    };
    function scroll () {
        let classes = document.getElementById("navbar").classList;
        if (
            document.body.scrollTop > 90 ||
            document.documentElement.scrollTop > 90
        ) {
            classes.remove("-top-24", "bg-transparent");
            classes.add("top-0", "bg-white");
        } else {
            classes.remove("top-0", "bg-white");
            classes.add("-top-24", "bg-transparent");
        }
    }

    // Preloader
    function preloaderRemover () {
        document.getElementById("preloader").classList.remove("flex");
        document.getElementById("preloader").classList.add("opacity-0");
        document.querySelector("body").classList.remove("overflow-hidden");
        setTimeout(() => {
            document.getElementById("preloader").classList.add("hidden");
        }, 700);
    }

    setTimeout(() => {
        preloaderRemover();
    }, 1000);

    // Resume Controller
    viewResumeBtn.addEventListener("click", resumeController);
    closeResumeBtn.addEventListener("click", resumeController);
    fitResumeBtn.addEventListener("click", () => adjustZoom("fit"));
    zoominResumeBtn.addEventListener("click", () => adjustZoom("+"));
    zoomoutResumeBtn.addEventListener("click", () => adjustZoom("-"));
    let iframe = document.querySelector("iframe");

    function resumeController () {
        document.getElementById("resume-iframe").classList.toggle("hidden");
        document.getElementById("resume-iframe").classList.toggle("flex");
        document.querySelector("body").classList.toggle("overflow-hidden");
        console.log("remo");
    }

    function adjustZoom (zoom) {
        iframe.contentWindow.postMessage(
            {
                iframeWidth: iframe.offsetWidth,
                zoom,
            },
            "*"
        );
    }
};

document.addEventListener("DOMContentLoaded", initApp);
