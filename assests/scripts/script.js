const buttonEl = document.querySelector(".aboutme-btn");
const aboutmeEl = document.querySelector(".about-me");
const skillsEl = document.querySelector(".skills");
const experienceEl = document.querySelector(".experience");
const schoolEl = document.querySelector(".schooling");

const aboutMeChange = () => {
  aboutmeEl.classList.toggle("toggle");
};

const skillsChange = () => {
  skillsEl.classList.toggle("toggle");
};

const ExperienceChange = () => {
  experienceEl.classList.toggle("toggle");
};

const schoolChange = () => {
  schoolEl.classList.toggle("toggle");
};
