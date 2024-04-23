import "./style.css";

document.addEventListener("DOMContentLoaded", function () {
  // const homebtn = document.getElementById("Homebtn");
  const homebtn1 = document.getElementById("HomeBtn1");
  const aboutbtn = document.getElementById("AboutusBtn");
  const projectsbtn = document.getElementById("ProjectsBtn");
  const contactbtn = document.getElementById("ContactBtn");

  const home = document.getElementById("home");
  const aboutus = document.getElementById("aboutus");
  const projects = document.getElementById("projects");
  const contact = document.getElementById("contact");

  homebtn1.addEventListener("click", () => {
    home.scrollIntoView({ behavior: "smooth" });
  });

  aboutbtn.addEventListener("click", () => {
    aboutus.scrollIntoView({ behavior: "smooth" });
  });

  projectsbtn.addEventListener("click", () => {
    projects.scrollIntoView({ behavior: "smooth" });
  });

  contactbtn.addEventListener("click", () => {
    contact.scrollIntoView({ behavior: "smooth" });
  });
});
