/*=========================================================
SIVEXOSOFT
script.js
=========================================================*/

document.addEventListener("DOMContentLoaded", () => {

    /*====================================
    LOADER
    ====================================*/

    const loader = document.querySelector(".loader");

    window.addEventListener("load", () => {

        if (loader) {

            loader.classList.add("hide");

        }

    });

    /*====================================
    STICKY HEADER
    ====================================*/

    const header = document.getElementById("header");

    function stickyHeader() {

        if (window.scrollY > 80) {

            header.classList.add("header-scrolled");

        } else {

            header.classList.remove("header-scrolled");

        }

    }

    stickyHeader();

    window.addEventListener("scroll", stickyHeader);

    /*====================================
    MOBILE MENU
    ====================================*/

    const menuBtn = document.querySelector(".menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");

    if (menuBtn) {

        menuBtn.addEventListener("click", () => {

            mobileMenu.classList.toggle("active");

            menuBtn.classList.toggle("active");

        });

    }

    document.querySelectorAll(".mobile-menu a").forEach(link => {

        link.addEventListener("click", () => {

            mobileMenu.classList.remove("active");

            menuBtn.classList.remove("active");

        });

    });

    /*====================================
    SMOOTH SCROLL
    ====================================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            const target = document.querySelector(this.getAttribute("href"));

            if (!target) return;

            e.preventDefault();

            target.scrollIntoView({

                behavior: "smooth"

            });

        });

    });

    /*====================================
    ACTIVE NAV
    ====================================*/

    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-links a");

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

    /*====================================
    SCROLL PROGRESS BAR
    ====================================*/

    const progress = document.getElementById("progressBar");

    window.addEventListener("scroll", () => {

        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled =
            (window.scrollY / height) * 100;

        progress.style.width = scrolled + "%";

    });

    /*====================================
    BACK TO TOP
    ====================================*/

    const topBtn = document.getElementById("backToTop");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 500) {

            topBtn.style.display = "flex";

        } else {

            topBtn.style.display = "none";

        }

    });

    topBtn.addEventListener("click", () => {

        window.scrollTo({

            top: 0,

            behavior: "smooth"

        });

    });

    /*====================================
    COUNTERS
    ====================================*/

    const counters = document.querySelectorAll(".counter");

    const runCounter = counter => {

        const target = +counter.dataset.target;

        const speed = 60;

        const update = () => {

            const count = +counter.innerText;

            const increment = target / speed;

            if (count < target) {

                counter.innerText = Math.ceil(count + increment);

                requestAnimationFrame(update);

            } else {

                counter.innerText = target + "+";

            }

        };

        update();

    };

    const counterObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                runCounter(entry.target);

                counterObserver.unobserve(entry.target);

            }

        });

    });

    counters.forEach(counter => counterObserver.observe(counter));

    /*====================================
    REVEAL ANIMATION
    ====================================*/

    const reveals = document.querySelectorAll(

        ".service-card,.project-card,.pricing-card,.testimonial-card,.process-card,.info-card,.stat-card"

    );

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("reveal", "active");

            }

        });

    }, {

        threshold: .15

    });

    reveals.forEach(item => {

        item.classList.add("reveal");

        revealObserver.observe(item);

    });

    /*====================================
    PORTFOLIO FILTER
    ====================================*/

    const filterBtns = document.querySelectorAll(".filter-btn");
    const projects = document.querySelectorAll(".project-card");

    filterBtns.forEach(btn => {

        btn.addEventListener("click", () => {

            filterBtns.forEach(b => b.classList.remove("active"));

            btn.classList.add("active");

            const filter = btn.dataset.filter;

            projects.forEach(project => {

                if (
                    filter === "all" ||
                    project.dataset.category === filter
                ) {

                    project.style.display = "block";

                } else {

                    project.style.display = "none";

                }

            });

        });

    });

    /*====================================
    TESTIMONIAL AUTO SLIDER
    ====================================*/

    const cards = document.querySelectorAll(".testimonial-card");

    let current = 0;

    if (cards.length > 1) {

        cards.forEach((card, index) => {

            if (index !== 0) {

                card.style.display = "none";

            }

        });

        setInterval(() => {

            cards[current].style.display = "none";

            current++;

            if (current >= cards.length) current = 0;

            cards[current].style.display = "block";

        }, 4000);

    }

    /*====================================
    FAQ ACCORDION
    ====================================*/

    document.querySelectorAll(".faq-item").forEach(item => {

        const p = item.querySelector("p");

        p.style.display = "none";

        item.querySelector("h3").addEventListener("click", () => {

            const open = p.style.display === "block";

            document.querySelectorAll(".faq-item p").forEach(text => {

                text.style.display = "none";

            });

            p.style.display = open ? "none" : "block";

        });

    });

    /*====================================
    CONTACT FORM
    ====================================*/

    const contactForm = document.querySelector(".contact-form");

    if (contactForm) {

        contactForm.addEventListener("submit", e => {

            e.preventDefault();

            alert("Thank you! Your message has been sent.");

            contactForm.reset();

        });

    }

    /*====================================
    NEWSLETTER
    ====================================*/

    const newsletter = document.querySelector(".newsletter-form");

    if (newsletter) {

        newsletter.addEventListener("submit", e => {

            e.preventDefault();

            alert("Subscribed Successfully!");

            newsletter.reset();

        });

    }

    /*====================================
    CURRENT YEAR
    ====================================*/

    const year = document.querySelector(".year");

    if (year) {

        year.textContent = new Date().getFullYear();

    }

});
