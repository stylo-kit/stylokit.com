import data from './data.json';

export default defineEventHandler(async (event) => {
  const featuredIds = [82, 20, 4];
  const featuredWebsites = data.websites.filter(website => featuredIds.includes(website.id));
  const response = {
    status: 200,
    count: featuredWebsites.length,
    data: featuredWebsites
  };

  return response;
});