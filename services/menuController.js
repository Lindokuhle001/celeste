import store from "../store";

let response = null;

const menuController = async () => {
  if (response) {
    console.log("response exists");
    
    return response;
  }
  response = await my.request({
    url: "https://celesteapi.herokuapp.com/menu",
    method: "POST",
    // data: store.getState().Token,
    dataType: "json"
  });

  const menu = await response.data;
  console.log("menu", response);

  store.dispatch({ type: "added menu", payload: menu });

  return response;
};

export { menuController };
