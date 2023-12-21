
interface LinkInterface {
    image_url: string;
    link_url: string;
    hover_text: string | null;
}
const links: LinkInterface[] = [
    {
        image_url: 'github.svg',
        link_url: 'http://github.com/1shaked/',
        hover_text: 'github'
    }, 
    {
        image_url: 'linkedin.svg',
        link_url: 'https://www.linkedin.com/in/shaked-chen-657094159/',
        hover_text: 'linkedin'
    },
    {
        image_url: 'whatsapp.svg',
        link_url: 'https://wa.me/+9725555555',
        hover_text: 'whatsapp'
    },
    {
        image_url: 'facebook.svg',
        link_url: 'https://www.linkedin.com/in/shaked-chen-657094159/',
        hover_text: 'facebook'
    },
]

function drawLinks(links: LinkInterface[]) {
    const nav_links_container_id = document.getElementById('nav_links_container_id');
    for (const link of links) {
        // console.log(link);
        const a_tag_link = document.createElement('a');
        a_tag_link.href = link.link_url;
        nav_links_container_id?.appendChild(a_tag_link);

        fetch(`/public/icons/${link.image_url}`).then((response) => {
            return response.text()
        }).then((svgContent) => {
            // we want to draw it into the DOM
            a_tag_link.innerHTML = svgContent;
        }).catch((error) => {
            console.log(error);
        })
    }
}

drawLinks(links);

