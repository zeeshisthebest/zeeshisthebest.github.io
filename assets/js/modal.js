const initModal = () => {
    const modal = document.getElementById('modal');
    const modalClose = document.getElementById('modal-close');
    const modalImg = document.getElementById('modal-image');
    const modalTitle = document.getElementById('modal-title');
    const modalViewBtn = document.getElementById('modal-view');
    const modalRepoBtn = document.getElementById('modal-repo');
    const modalAbout = document.getElementById('modal-about');
    const modalTech = document.getElementById('modal-techs');

    const data = {
        "glowing-graphics": {
            img: "glowing_graphics.jpg",
            title: "Glowing Graphics",
            view: "https://glowinggraphics.net/",
            repo: "",
            about: "This project involved the development of a dynamic website for Glowing Graphics LLC, including an admin panel for managing content and functionality. It was engineered using vanilla PHP and the Model-View-Presenter (MVP) architecture to ensure scalability and maintainable code. The website featured responsive web interfaces crafted with HTML, CSS, and Bootstrap, delivering cross-browser compatibility and engaging user experiences. Additionally, database management was implemented using MySQLi and PDO, ensuring efficient data storage and retrieval for seamless operations.",
            techs: ["html.svg", "css.svg", "javascript.svg", "php.svg", "bootstrap.svg", "jquery.svg", "mysql.svg"],
        },
        "outlook-printing": {
            img: "outlookprinting.png",
            title: "Outlook Printing",
            view: "https://www.outlookprinting.com/",
            repo: "",
            about: "This project involved the development of a CMS-based website for Outlook Printing, utilizing the Printer Bridge (4over) platform. The work focused on setting up and customizing the content management system to meet client-specific requirements. Most widgets and elements were designed using HTML and vanilla CSS, with minimal integration of Bootstrap for styling and JavaScript for interactivity, ensuring a lightweight and functional website tailored to the client's needs.",
            techs: ["html.svg", "css.svg", "javascript.svg", "bootstrap.svg"],
        },
        "weather-app": {
            img: "weather_app.png",
            title: "Weather App",
            view: "https://zeeshisthebest.github.io/weather_react_app/",
            repo: "https://github.com/zeeshisthebest/weather_react_app",
            about: "This is a React-based Weather App that provides real-time weather data for any location worldwide. It delivers accurate weather information such as temperature, humidity, wind speed, air quality, weekly forecast, and more. The backend used for fetching data is expressJs based to provide security and encapsulation of confidential data like api keys etc.",
            techs: ["react.svg", "css.svg", "tailwind.svg", "axios.svg", "javascript.svg", "expressjs.svg", "nodejs.svg", "vercel.svg", "github-pg.svg"],
        },
        "clock": {
            img: "clock.png",
            title: "Rotating Dial Analogue Clock",
            view: "https://zeeshisthebest.github.io/clock/",
            repo: "https://github.com/zeeshisthebest/clock",
            about: "A modern, circular clock that combines analog and digital time display. This clock is created using HTML, vanilla CSS, and vanilla JavaScript, with no external libraries. The design features a unique split layout with a dark theme on the left side and a light theme on the right. This clock also displays the current date, time, and day of the week.",
            techs: ["css.svg", "javascript.svg", "github-pg.svg"],
        },
        "monster-truck": {
            img: "monster.png",
            title: "Monster Truck",
            view: "https://zeeshisthebest.github.io/monster/build/index.html",
            repo: "https://zeeshisthebest.github.io/monster/",
            about: "A dynamic and visually stunning portfolio piece crafted to showcase skills in Tailwind CSS — a modern utility-first CSS framework. This project serves as a testament to proficiency in creating sleek, responsive, and user-friendly web interfaces using Tailwind's extensive set of utility classes.",
            techs: ["tailwind.svg", "github-pg.svg"],
        },
        "downloader": {
            img: "ytb_downloader.png",
            title: "Youtube Downloader",
            view: "",
            repo: "https://github.com/zeeshisthebest/youtubedownloader",
            about: `A simple program made with the help of library "pytube" to download videos from youtube in audio/video format. The intention was to make a program using max OOP approach along with the handling of data.
            The program supports multiple links to be downloaded, with the option to select download directory and choosing the audio or video format availble from youtube.`,
            techs: ["python.svg", "youtube.svg"],
        },
    };

    function populateModal (model) {
        modalImg.src = `./img/portfolio/${model.img}`;
        modalTitle.innerText = model.title;
        modalViewBtn.src = model.view;

        // repo Button
        if (model.repo === "") {
            modalRepoBtn.classList.remove("inline-block");
            modalRepoBtn.classList.add("hidden");
        } else {

            modalRepoBtn.classList.add("inline-block");
            modalRepoBtn.classList.remove("hidden");
            modalRepoBtn.href = model.repo;
        }

        // View Button
        if (model.view === "") {
            modalViewBtn.classList.remove("inline-block");
            modalViewBtn.classList.add("hidden");
        } else {

            modalViewBtn.classList.add("inline-block");
            modalViewBtn.classList.remove("hidden");
            modalViewBtn.href = model.view;
        }

        let techString = "";
        model.techs.forEach(tech => {
            techString += `<img src="./img/portfolio/badges/${tech}" alt="tech-thumbnail" aria-hidden>`;
        });

        modalAbout.innerText = model.about;
        modalTech.innerHTML = techString;
    }

    // Showing the modal
    async function showModal (id) {
        populateModal(data[id]);
        modal.style.display = "block";
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 10);
        });
        modal.style.opacity = "1";
        document.body.style.overflow = 'hidden';
    }

    // Hiding the modal
    modalClose.addEventListener('click', async function () {
        modal.style.opacity = "0";
        await new Promise((resolve) => {
            setTimeout(() => {
                resolve();
            }, 610);
        });
        modal.style.display = "none";
        document.body.style.overflow = 'visible';
    })

    modal.addEventListener('click', async function (event) {
        if (event.target.id === "modal") {
            modal.style.opacity = "0";
            await new Promise((resolve) => {
                setTimeout(() => {
                    resolve();
                }, 600);
            });
            modal.style.display = "none";
            document.body.style.overflow = 'visible';
        }
    })

    window.showModal = showModal;
}

document.addEventListener('DOMContentLoaded', initModal);
