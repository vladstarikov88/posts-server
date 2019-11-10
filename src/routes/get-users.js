export const getUsers = (request, response) => {
  response.status(200)
  response.json([
    {
      name: 'vlad'
    },
    {
      name: 'alex'
    }
  ]);
};

export default getUsers;
