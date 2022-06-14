import store from "../store";

let response = null;

const priceController = async () => {
  if (response) {
    return response;
  }

  response = await my.request({
    url: "https://celesteapi.herokuapp.com/price",
    method: "POST",
    dataType: "json"
  });

  const pricing = response.data;
  store.dispatch({ type: "added price", payload: pricing });
  return response;
};

export { priceController };
