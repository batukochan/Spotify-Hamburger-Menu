const burgerSlide = () => {
    const hamburger = document.querySelector(".hamburger");
    const nav = document.querySelector(".navBurger");
    const links = document.querySelectorAll(".navLinks li");
    const mainpage = document.querySelector(".mainpage");
    const spotifyFree = document.querySelector(".spotifyFree");

    hamburger.addEventListener("click", () => {
        nav.classList.toggle("navOpen");
        
        links.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ``
            } else {
                link.style.animation = `navFade 0.5s ease forwards ${index / 7 + 0.2}s `
            }
        });
        hamburger.classList.toggle("close");
        mainpage.classList.toggle("shadow");
        spotifyFree.classList.toggle("shadow");
    });

}

burgerSlide();