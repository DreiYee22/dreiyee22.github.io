const projects = [{
    webpage: '/projects/soho-nyc.html',
    image: 'src/images/projects/soho-nyc.jpg',
    name: 'SoHo, NYC',
    alt: 'soho-nyc',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},

{
    webpage: '/projects/27-orchard.html',
    image: 'src/images/projects/27-orchard.png',
    name: '27 Orchard',
    alt: '27-orchard',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},

{
    webpage: '/projects/greater-new-york.html',
    image: 'src/images/projects/greater-new-york.jpg',
    name: 'Greater New York',
    alt: 'greater-new-york',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},

{
    webpage: '/projects/old-quarter.html',
    image: 'src/images/projects/old-quarter.jpg',
    name: 'Old Quarter',
    alt: 'old-quarter',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
},

{
  webpage: '/projects/weehawken.html',
  image: 'src/images/projects/weehawken.jpg',
  name: 'Weehawken',
  alt: 'weehawken',
  description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam ad culpa provident cumque veritatis? Laudantium facilis laborum aperiam enim ad!'
}, 


];

function displayProjects(filteredProjects) {
  let projectsListHTML = '';
  
  if (filteredProjects.length === 0) {
      projectsListHTML = `<p class="no-projects">No Projects found</p>`;
  } else {
      filteredProjects.forEach((project) => {
          projectsListHTML += `
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
          `;
      });
  }


  document.querySelector('.projects').innerHTML = projectsListHTML;
}

displayProjects(projects);

document.querySelector('.search').addEventListener('input', function() {
  const searchTerm = this.value.toLowerCase();
  const filteredProjects = projects.filter(project => 
      project.name.toLowerCase().includes(searchTerm)
  );
  displayProjects(filteredProjects);
});