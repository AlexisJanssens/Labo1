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
    name: "testJS",
    language: "javaScript",
    presentation: "qsdjskh jqshd qhd kjsqhd jqhs dqsd",
    images: [],
    description: "kjsqlkjsd lkqjsd oqsd lqkjds",
  },
  {
    name: "testASP",
    language: "ASP",
    presentation: "jqksjdlqkjsd sqlk jdlqkjs ",
    images: [],
    description: " qsidqosid  qiaouijl aposkdlasd ",
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
