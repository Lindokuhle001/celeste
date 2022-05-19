import store from "../store";

let response = null;

const priceController = async () => {
  if (response) {
    return response;
  }

  response = await my.request({
    url: "http://localhost:3000/price",
    method: "GET",
    dataType: "json"
  });

  const perPersonCost = response.data.perPersonCost;
  store.dispatch({ type: "added price", payload: perPersonCost });
  return response;
};

export { priceController };
