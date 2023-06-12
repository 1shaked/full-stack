
interface ProjectInterface {
    title: string;
    description: string;
    image_url: string;
    alt_text: string;
}

const projects: ProjectInterface[] = [
    { 
        title: 'waze',
        description: `
        Waze is a popular GPS navigation and traffic app that revolutionizes the way people navigate roads and highways.
        It is designed to provide real-time, crowd-sourced information about traffic conditions, accidents, road closures, 
        and other obstacles, helping users reach their destinations efficiently and avoiding unnecessary delays.
        `,
        image_url: 'waze.svg',
        alt_text: 'waze'
    }
]

function drawProjects(projects: ProjectInterface[]) {
    const projects_elements_html = document.getElementById('projects'); // getting the projects
    for (const project of projects) { // loping over projects
        console.log(project);
        const outer_div = document.createElement('div'); // creating the outer div that contains the project
        outer_div.classList.add('project'); // adding the project to the outer div
        const div_img = document.createElement('div'); // create the container image div that will contains the img
        const img = document.createElement('img'); // create the img of the project
        img.src = `/public/projects_icons/${project.image_url}`; // set the image src
        img.alt = project.alt_text; // set the alt text of the image
        div_img.appendChild(img); // add the img to the actual div
        outer_div.appendChild(div_img); // added the div_image to the outer div
        
        // this is for the description of our project
        const description_div_container = document.createElement('div'); // creating the div of the description
        const title_heading = document.createElement('h2'); // creating the heading for the project
        title_heading.textContent = project.title; // adding the title to the heading
        title_heading.classList.add('project_title') // adding the class to the heading
        description_div_container.appendChild(title_heading); // added the heading
        const description_p = document.createElement('p'); // creating the div of the description
        description_p.textContent = project.description; // creating the text content to the description 
        description_p.classList.add('project_description') // added the class name
        description_div_container.appendChild(description_p); // added the description_p to the description_div_container

        outer_div.appendChild(description_div_container); // append the description_div_container tp the outer div


        projects_elements_html?.appendChild(outer_div); // added outer_div to the projects_elements_html
    }

}
drawProjects(projects);
/*

<div class="project">
        // div_img
        <div>
          <img src="./public/projects_icons/waze.svg" alt="">
        </div>
        // description_div_container
        <div>
          <h2 class="project_title">waze</h2>
          <p class="project_description">
            Waze is a popular GPS navigation and traffic app that revolutionizes the way people navigate roads and highways.
          It is designed to provide real-time, crowd-sourced information about traffic conditions, accidents, road closures, 
          and other obstacles, helping users reach their destinations efficiently and avoiding unnecessary delays.
          
          </p>
        </div>
      </div>
      
      */