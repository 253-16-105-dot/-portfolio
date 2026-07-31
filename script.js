
// Typing Effect

const typing = document.getElementById("typing");

const words = [
    "Web Developer",
    "C Programmer",
    "Python Developer",
    " CIS Student"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {

    let currentWord = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex++;

        if (charIndex > currentWord.length) {

            deleting = true;

            setTimeout(typeEffect, 1200);

            return;

        }

    } else {

        typing.textContent =
            currentWord.substring(0, charIndex);

        charIndex--;

        if (charIndex < 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {

                wordIndex = 0;

            }

        }

    }

    setTimeout(typeEffect, deleting ? 60 : 120);

}

typeEffect();




// Active Navbar


const sections = document.querySelectorAll("section");

const navLinks = document.querySelectorAll("nav ul li a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 120;

        const height = section.clientHeight;

        if (pageYOffset >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});




// Sticky Navbar


const header = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        header.style.background = "#ffffff";

        header.style.boxShadow =
            "0 5px 20px rgba(0,0,0,.15)";

    } else {

        header.style.background = "#ffffff";

        header.style.boxShadow =
            "none";

    }

});



// Scroll Animation// 

const observer = new IntersectionObserver(entries => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

});

document.querySelectorAll(".card").forEach(card => {

    observer.observe(card);

});

document.querySelectorAll(".project").forEach(project => {

    observer.observe(project);

});

document.querySelectorAll(".edu-box").forEach(box => {

    observer.observe(box);

});




// Button Hover


document.querySelectorAll(".btn").forEach(btn => {

    btn.addEventListener("mouseenter", () => {

        btn.style.transform = "scale(1.08)";

    });

    btn.addEventListener("mouseleave", () => {

        btn.style.transform = "scale(1)";

    });

});




// Contact Form


const form = document.querySelector("form");

if (form) {

    form.addEventListener("submit", function (e) {

        e.preventDefault();

        alert("Message Sent Successfully!");

        form.reset();

    });

}




// Back To Top Button


const topBtn = document.createElement("button");

topBtn.innerHTML = "↑";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position = "fixed";
topBtn.style.right = "25px";
topBtn.style.bottom = "25px";
topBtn.style.width = "50px";
topBtn.style.height = "50px";
topBtn.style.border = "none";
topBtn.style.borderRadius = "50%";
topBtn.style.background = "#6a00ff";
topBtn.style.color = "#fff";
topBtn.style.fontSize = "22px";
topBtn.style.cursor = "pointer";
topBtn.style.display = "none";
topBtn.style.zIndex = "9999";

window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.onclick = () => {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

};






const cards = document.querySelectorAll(".card");

cards.forEach(card => {

    card.addEventListener("mousemove", () => {

        card.style.transform = "translateY(-10px) scale(1.05)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});




// Image Rotation


const profile = document.querySelector(".right img");

if (profile) {

    profile.addEventListener("mouseenter", () => {

        profile.style.transition = ".5s";

        profile.style.transform = "rotate(5deg) scale(1.05)";

    });

    profile.addEventListener("mouseleave", () => {

        profile.style.transform = "rotate(0deg) scale(1)";

    });

}




// Fade In Sections


const fadeObserver = new IntersectionObserver(items => {

    items.forEach(item => {

        if (item.isIntersecting) {

            item.target.style.opacity = "1";

            item.target.style.transform = "translateY(0)";

        }

    });

});

document.querySelectorAll("section").forEach(section => {

    section.style.opacity = "0";

    section.style.transform = "translateY(60px)";

    section.style.transition = "1s";

    fadeObserver.observe(section);

});