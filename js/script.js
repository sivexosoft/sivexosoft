/*=================================================
SIVEXOSOFT
script.js
=================================================*/

"use strict";

/*=========================================
SELECTORS
=========================================*/

const header = document.querySelector("header");

const navLinks = document.querySelectorAll(".nav-links a");

const menuBtn = document.querySelector(".menu-btn");

const navMenu = document.querySelector(".nav-links");

const backToTop = document.getElementById("backToTop");

const loader = document.querySelector(".loader");

const sections = document.querySelectorAll("section");

/*=========================================
LOADER
=========================================*/

window.addEventListener("load", () => {

    if (loader) {

        loader.style.opacity = "0";

        setTimeout(() => {

            loader.style.display = "none";

        }, 500);

    }

});

/*=========================================
STICKY HEADER
=========================================*/

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        header.classList.add("header-scrolled");

    }

    else {

        header.classList.remove("header-scrolled");

    }

});

/*=========================================
MOBILE MENU
=========================================*/

if(menuBtn){

menuBtn.addEventListener("click",()=>{

menuBtn.classList.toggle("active");

navMenu.classList.toggle("active");

});

}

navLinks.forEach(link=>{

link.addEventListener("click",()=>{

if(navMenu){

navMenu.classList.remove("active");

}

if(menuBtn){

menuBtn.classList.remove("active");

}

});

});

/*=========================================
ACTIVE NAV LINK
=========================================*/

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

const height=section.offsetHeight;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href").includes(current)){

link.classList.add("active");

}

});

});

/*=========================================
SMOOTH SCROLL
=========================================*/

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{

anchor.addEventListener("click",function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute("href"));

if(target){

target.scrollIntoView({

behavior:"smooth"

});

}

});

});

/*=========================================
BACK TO TOP
=========================================*/

window.addEventListener("scroll",()=>{

if(!backToTop) return;

if(window.scrollY>400){

backToTop.classList.add("show");

}

else{

backToTop.classList.remove("show");

}

});

if(backToTop){

backToTop.addEventListener("click",()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

});

}

/*=========================================
SCROLL REVEAL
=========================================*/

const observer=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("fade-up");

}

});

},{

threshold:.15

});

document.querySelectorAll(

".service-card,.project-card,.team-card,.blog-card,.pricing-card,.faq-card,.trust-card,.stat-box,.info-card"

).forEach(el=>{

observer.observe(el);

});

/*=========================================
COUNTER
=========================================*/

const counters=document.querySelectorAll(".counter");

const speed=200;

const counterObserver=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

const counter=entry.target;

const update=()=>{

const target=+counter.dataset.target;

const count=+counter.innerText;

const inc=target/speed;

if(count<target){

counter.innerText=Math.ceil(count+inc);

requestAnimationFrame(update);

}

else{

counter.innerText=target;

}

};

update();

counterObserver.unobserve(counter);

}

});

});

counters.forEach(counter=>{

counterObserver.observe(counter);

});

/*=========================================
PORTFOLIO FILTER
=========================================*/

const filterBtns=document.querySelectorAll(".filter-btn");

const projects=document.querySelectorAll(".project-card");

filterBtns.forEach(btn=>{

btn.addEventListener("click",()=>{

filterBtns.forEach(b=>b.classList.remove("active"));

btn.classList.add("active");

const filter=btn.dataset.filter;

projects.forEach(project=>{

if(filter==="all"){

project.style.display="block";

}

else if(project.dataset.category===filter){

project.style.display="block";

}

else{

project.style.display="none";

}

});

});

});

/*=========================================
FAQ
=========================================*/

document.querySelectorAll(".faq-item").forEach(item=>{

const title=item.querySelector("h3");

if(title){

title.addEventListener("click",()=>{

item.classList.toggle("active");

});

}

});

/*=========================================
FORM VALIDATION
=========================================*/

document.querySelectorAll("form").forEach(form=>{

form.addEventListener("submit",e=>{

const required=form.querySelectorAll("[required]");

let valid=true;

required.forEach(input=>{

if(input.value.trim()===""){

valid=false;

input.style.borderColor="red";

}

else{

input.style.borderColor="#00d4aa";

}

});

if(!valid){

e.preventDefault();

alert("Please fill all required fields.");

}

});

});

/*=========================================
RIPPLE EFFECT
=========================================*/

document.querySelectorAll(".btn").forEach(button=>{

button.addEventListener("click",function(e){

const circle=document.createElement("span");

const diameter=Math.max(

this.clientWidth,

this.clientHeight

);

circle.style.width=circle.style.height=

`${diameter}px`;

circle.style.left=

`${e.clientX-this.offsetLeft-diameter/2}px`;

circle.style.top=

`${e.clientY-this.offsetTop-diameter/2}px`;

circle.classList.add("ripple");

const ripple=this.querySelector(".ripple");

if(ripple){

ripple.remove();

}

this.appendChild(circle);

});

});

/*=========================================
TYPING EFFECT
=========================================*/

const typing=document.querySelector(".typing");

if(typing){

const words=[

"Web Development",

"Mobile Apps",

"AI Solutions",

"Digital Marketing",

"UI / UX Design"

];

let wordIndex=0;

let charIndex=0;

let deleting=false;

function type(){

const current=words[wordIndex];

if(!deleting){

typing.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}

else{

typing.textContent=current.substring(0,charIndex--);

if(charIndex===0){

deleting=false;

wordIndex=(wordIndex+1)%words.length;

}

}

setTimeout(type,deleting?40:100);

}

type();

}

/*=========================================
CURRENT YEAR
=========================================*/

const year=document.querySelector(".year");

if(year){

year.textContent=new Date().getFullYear();

}

console.log("SivexoSoft Website Loaded Successfully");
