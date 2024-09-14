import data from './data.json';

export default defineEventHandler(async (event) => {
  const response = {
    status: 200,
    count: 1,
    data: data.fontOfday
  };

  return response;
});