import store from "../store";

const menuController = async () => {
  const response = await my.request({
    url: "http://localhost:3000/menu",
    method: "GET",
    dataType: "json"
  });

  const menu = await response.data;

  store.dispatch({ type: "added menu", payload: menu });
};

export default menuController;
