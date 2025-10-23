"use strict";
const slides = document.getElementById("slides");
slides.innerHTML += slides.innerHTML;

const modal = document.getElementById("modal");

const slideElements = document.querySelectorAll(".slide");
slideElements.forEach((slide) => {
  slide.addEventListener("click", () => {
    modal.style.display = "block";
  });
});

const close = document.getElementsByClassName("close")[0];
close.addEventListener("click", () => {
  modal.style.display = "none";
});
