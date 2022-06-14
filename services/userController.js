import store from "../store";

let response = null;

const userController = async () => {
  if (response) {
    return response;
  }

  response = await my.request({
    url: "https://celesteapi.herokuapp.com/login",
    method: "GET",
    dataType: "json"
  });

  const userDetails = await response.data;
  store.dispatch({ type: "added user details", payload: userDetails });
  return response;
};

export { userController };
