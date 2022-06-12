import store from "../store";

let response = null;

const menuController = async () => {
  if (response) {
    return response;
  }
  response = await my.request({
    url: "http://localhost:3000/menu",
    headers,
    method: "GET",
    dataType: "json"
  });

  const menu = await response.data;
  console.log("menu", response);

  store.dispatch({ type: "added menu", payload: menu });


  return response;
};

export { menuController };
