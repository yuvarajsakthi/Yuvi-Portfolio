console.log("Done By Yuvaraj");

const colorToggler = document.querySelector(".colormode");
const root = document.querySelector(".root");

// LocalStorage
const modeChecker = () => {
  if (root.className.includes("dark")) {
    colorToggler.textContent = "LIGHT MODE";
    localStorage.setItem("mode", "dark");
  } else {
    colorToggler.textContent = "DARK MODE";
    localStorage.setItem("mode", "light");
  }
};

colorToggler.addEventListener("click", () => {
  root.classList.toggle("dark");
  modeChecker();
});

document.addEventListener("DOMContentLoaded", () => {
  const currentMode = localStorage.getItem("mode");
  if (currentMode == "dark") {
    root.classList.add("dark");
  } else {
    root.classList?.remove("dark");
    console.log("new user");
  }
  modeChecker();
});

// Highlighter
const AllSection = [
  ...document.querySelectorAll("section"),
  document.querySelector("footer"),
];

const remover = (ele, section) => {
  setTimeout(() => {
    ele.classList.remove("highlight");
    section.classList.remove("blur");
  }, 1500);
};

const Highliter = (item) => {
  AllSection.forEach((section) => {
    if (item == "PROJECTS") {
      const highlight = document.querySelector("section.projects");
      highlight.classList.add("highlight");
      if (section != highlight) {
        section.classList.add("blur");
      }
      remover(highlight, section);
    }
    if (item == "ABOUT-ME") {
      const highlight = document.querySelector("section.about-me");
      highlight.classList.add("highlight");
      if (section != highlight) {
        section.classList.add("blur");
      }
      remover(highlight, section);
    }
    if (item == "CONTACT") {
      const highlight = document.querySelector("section.contact");
      highlight.classList.add("highlight");
      if (section != highlight) {
        section.classList.add("blur");
      }
      remover(highlight, section);
    }
  });
};

const navlinks = document.querySelector("nav ul");
navlinks.addEventListener("click", (e) => {
  e.stopPropagation();
  const clickedElementText = e.target.textContent;
  clickedElementText == "PROJECTS" ? Highliter("PROJECTS") : "";
  clickedElementText == "ABOUT" ? Highliter("ABOUT-ME") : "";
  clickedElementText == "CONTACT" ? Highliter("CONTACT") : "";
});

