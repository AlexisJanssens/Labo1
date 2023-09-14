const slidesContainer = document.getElementById("slides-container");
const languageSelect = document.getElementById("languageSelect");
const projectWrapper = document.querySelector(".project");
const nextButton = document.getElementById("slide-arrow-next");
const prevButton = document.getElementById("slide-arrow-prev");

const projectList = [
  {
    name: "memory",
    language: "javaScript",
    presentation:
      "Here is my first JS project. This is a memory game on navigator. The languages used are HTML, CSS and JS",
    images: ["../img/memory1.png", "../img/memory2.png", "../img/memory3.png"],
    description: `You can see all the code here : <a href="https://github.com/AlexisJanssens/Memory.git">https://github.com/AlexisJanssens/Memory.git</a>`,
  },
  {
    name: "ohMyFood",
    language: "HTML",
    presentation:
      "This is a responsive site with many CSS animations. The languages uses are HTML5 and CSS3 with Sass.",
    images: [
      "../img/ohMyFood1.png",
      "../img/ohMyFood2.png",
      "../img/ohMyFood3.png",
    ],
    description: `You can see all the code here : <a href="https://github.com/AlexisJanssens/Projet-3---OhMyFood-animations-CSS-.git">https://github.com/AlexisJanssens/Projet-3---OhMyFood-animations-CSS-.git</a>`,
  },
  {
    name: "kasa",
    language: "React",
    presentation:
      "This is my react project, using some big fonctionnalities of react like hooks, components and styled-components",
    images: ["../img/kasa1.png", "../img/kasa2.png", "../img/kasa3.png"],
    description: `You can see all the code here : <a href="https://github.com/AlexisJanssens/Projet7---Kasa-React.js-.git">https://github.com/AlexisJanssens/Projet7---Kasa-React.js-.git</a>`,
  },
  {
    name: "kanap",
    language: "javaScript",
    presentation:
      "This is a e-shop with JS, I am using localStorage and API for datas. And we have a form using some regEx to get the customer informations ",
    images: [
      "../img/kanap1.png",
      "../img/kanap2.png",
      "../img/kanap3.png",
      "../img/kanap4.png",
    ],
    description: `You can see all the code here : <a href="https://github.com/AlexisJanssens/P5-Dev-Web-Kanap-JavaScript-creation-dun-site-dynamique.git">https://github.com/AlexisJanssens/P5-Dev-Web-Kanap-JavaScript-creation-dun-site-dynamique.git</a>`,
  },
];

// Show differents projects relative to each languages

languageSelect.addEventListener("change", () => {
  projectWrapper.innerHTML = "";
  let filterProject = projectList.filter(
    (project) => project.language == languageSelect.value
  );
  console.log(filterProject);
  for (let project of filterProject) {
    const projectName = document.createElement("h2");
    projectWrapper.appendChild(projectName);
    projectName.innerHTML = `Project : ${project.name}`;

    const projectPresentation = document.createElement("p");
    projectWrapper.appendChild(projectPresentation);
    projectPresentation.innerHTML = `${project.presentation}`;

    const sliderWrapper = document.createElement("section");
    sliderWrapper.classList.add("slider-wrapper");
    projectWrapper.appendChild(sliderWrapper);

    const prevBtn = document.createElement("button");
    prevBtn.classList.add("slide-arrow");
    prevBtn.setAttribute("id", "slide-arrow-prev");
    prevBtn.innerHTML = "&#8249;";
    sliderWrapper.appendChild(prevBtn);

    const nextBtn = document.createElement("button");
    nextBtn.classList.add("slide-arrow");
    nextBtn.innerHTML = "&#8250;";
    nextBtn.setAttribute("id", "slide-arrow-next");
    sliderWrapper.appendChild(nextBtn);

    const ul = document.createElement("ul");
    ul.classList.add("slides-container");
    ul.setAttribute("id", "slides-container");
    sliderWrapper.appendChild(ul);

    // Loop for showing differents images on the slide

    for (let img in project.images) {
      let li = document.createElement("li");
      li.classList.add("slideObject");
      ul.appendChild(li);
      li.style.backgroundImage = `url(../img/${project.name}/${
        project.name + (parseInt(img) + 1)
      }.png`;
    }

    const projectDescription = document.createElement("p");
    projectDescription.classList.add("description");
    projectWrapper.appendChild(projectDescription);
    projectDescription.innerHTML = `${project.description}`;

    // Event for swipe right

    prevBtn.addEventListener("click", () => {
      const slideWidth = sliderWrapper.clientWidth;
      ul.scrollLeft -= slideWidth;
    });

    // Event for swipe left

    nextBtn.addEventListener("click", () => {
      const slideWidth = sliderWrapper.clientWidth;
      ul.scrollLeft += slideWidth;
    });
  }
});
