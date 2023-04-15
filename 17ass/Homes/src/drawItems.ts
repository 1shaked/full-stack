import {IHousesFields} from '../@types/generated/contentful';
import MarkdownIt from 'markdown-it'
export const drawItems = (arrItems: IHousesFields[]) => {
    // MarkdownIt().render('# markdown-it rulezz!')
    const md = new MarkdownIt();
    const HomesList = document.querySelector('#HomesList');
    for (const item of arrItems) {
        const div = document.createElement('div');
        div.classList.add('item');
        // const img = document.createElement('img');
        // img.src = item.img.fields.file.url;
        const container = document.createElement('div');
        container.classList.add('containerHome');
        // const aTag = document.createElement('a');
        // aTag.href = `/pages/index.html?${item}`;
        const h2 = document.createElement('h2');
        h2.textContent = item.title;
        const p = document.createElement('p');
        // p.textContent = item.description;
        p.innerHTML = md.render(item.description);
        div.style.backgroundImage = `url(${item.img.fields.file.url})`;
        
        // div.appendChild(img);
        div.appendChild(container);
        container.appendChild(h2);
        container.appendChild(p);
        HomesList?.appendChild(div);
    }
}