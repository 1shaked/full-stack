import * as contentful from 'contentful';
import {key} from './key';
import {IHousesFields} from '../@types/generated/contentful';
import {drawItems} from './drawItems';
const client = contentful.createClient(key);

const arrItems: IHousesFields[] = [];
client.getEntries()
.then((response) => {
    console.log(response)
    // const items: IHouses = response.items
    // parse the response from contentful as a IHousesFields
    // const items: IHousesFields = response.items[0].fields as IHousesFields
    // console.log(items);
    for (const item of response.items) {
        arrItems.push(item.fields as IHousesFields);
    }
    console.log(arrItems);
    drawItems(arrItems);
      
})
.catch(console.error);
