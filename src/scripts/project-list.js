const projects = [{
    webpage: '/projectspages/soho-nyc.html',
    image: 'src/images/projects/soho-nyc.jpg',
    name: 'SoHo, NYC',
    alt: 'soho-nyc',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},

{
    webpage: '',
    image: 'src/images/projects/27-orchard.png',
    name: '27 Orchard',
    alt: '27-orchard',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},

{
    webpage: '',
    image: 'src/images/projects/greater-new-york.jpg',
    name: 'Greater New York',
    alt: 'greater-new-york',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},

{
    webpage: '',
    image: 'src/images/projects/old-quarter.jpg',
    name: 'Old Quarter',
    alt: 'old-quarter',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},

{
  webpage: '',
  image: 'src/images/projects/weehawken.jpg',
  name: 'Weehawken',
  alt: 'weehawkenr',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},


];

let projectsListHTML = '';

projects.forEach((project) => {
    projectsListHTML +=  
    `
    <div class="project-card ${project.alt}" onclick="location.href='${project.webpage}'">
          <img src="${project.image}" alt="altiura-${project.alt}" >
          <div class="project-details">
            <div class="project-name">
              ${project.name}
            </div>
            <div class="project-description">
              <p>${project.description}</p>
            </div>
          </div>
        </div>
    `
}
);

document.querySelector('.projects').innerHTML = projectsListHTML;