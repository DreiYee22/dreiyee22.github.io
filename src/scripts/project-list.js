const projects = [{
    webpage: '/projects/soho-nyc.html',
    image: 'src/images/projects/soho-nyc.jpg',
    name: 'SoHo, NYC',
    alt: 'soho-nyc',
    description: 'Staying in SoHo offers a trendy experience with high-end boutiques, art galleries, world-class restaurants, and iconic landmarks like cast-iron buildings in a vibrant Manhattan neighborhood.'
},

{
    webpage: '/projects/27-orchard.html',
    image: 'src/images/projects/27-orchard.png',
    name: '27 Orchard',
    alt: '27-orchard',
    description: '27 Orchard offers a perfect blend of modern living and convenience, with easy access to shopping centers, dining, and transportation in a vibrant urban setting.'
},

{
    webpage: '/projects/greater-new-york.html',
    image: 'src/images/projects/greater-new-york.jpg',
    name: 'Greater New York',
    alt: 'greater-new-york',
    description: 'Staying in Greater New York offers a vibrant, diverse experience with world-class museums, Broadway shows, unique neighborhoods, and stunning natural beauty, always offering something new to discover.'
},

{
    webpage: '/projects/old-quarter.html',
    image: 'src/images/projects/old-quarter.jpg',
    name: 'Old Quarter',
    alt: 'old-quarter',
    description: 'The Old Quarter is a historic neighborhood with narrow streets, colonial-era buildings, vibrant markets, and charming cafes, offering a blend of tradition and modern city life.'
},

{
  webpage: '/projects/weehawken.html',
  image: 'src/images/projects/weehawken.jpg',
  name: 'Weehawken',
  alt: 'weehawken',
  description: 'This Weehawken residence offers stunning views of New York City, blending history, culture, and convenience with a quick commute to NYC.'
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