// make sure you change the package.json to "type": "commonjs" before running this

require('dotenv').config();
const contentfulManagement = require('contentful-management');

// console.log('accessToken', process.env.CONTENTFUL_ACCESS_TOKEN);

module.exports = function () {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  return contentfulClient
    .getSpace(process.env.CONTENTFUL_SPACE_ID)
    .then((space) => space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT));
};



/*
import * as contentfulManagement from 'contentful';
import dotenv from 'dotenv';

dotenv.config({ path: '.env.local' });

export default async function getContentfulEnvironment() {
  const contentfulClient = contentfulManagement.createClient({
    accessToken: process.env.CONTENTFUL_MANAGEMENT_API_ACCESS_TOKEN,
  });

  const space = await contentfulClient.getSpace(process.env.CONTENTFUL_SPACE_ID);
  return space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT || 'master');
}
 */
