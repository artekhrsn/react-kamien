const API_USER = "https://us-central1-react-mspm.cloudfunctions.net/api/people";
const getUsers = () => {
  return fetch(API_USER)
    .then((response) => {
      if (response.ok) {
        console.log(response);
        return response;
      }
      throw Error(response.status);
    })
    .then((response) => response.json())
    .catch((error) => {
      console.error(error);
    });
};
export default getUsers;
