import data from './data.json';

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  const category = query.category;
  const tag = query.tag;
  const limit = query.limit;
  const response = {
    status: 200,
    count: data.websites.length,
    data: data.websites
  };

  if (category) {
    response.data = response.data.filter(website => website.category == category);
  }

  if (tag) {
    response.data = response.data.filter(website => website.tags.includes(tag.toString()));
  }

  if (limit) {
    response.data = response.data.slice(0, parseInt(limit.toString()));
  }

  response.count = response.data.length;

  return response;
});