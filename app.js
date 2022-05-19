import store from "./store";
import { menuController } from "./services/controller";

App({
  data: {
    numberOfPersons: 0,
    name: "lindo",
    email: "lindo@bbd.co.za",
    table: 3,
    url: "http://localhost:3000/user"
  },

  onLaunch() {
    menuController();

    try {
      this.getPrice();
    } catch (error) {
      my.alert({ content: "fail" });
    }
  },

  async getPrice() {
    const response = await my.request({
      url: "http://localhost:3000/price",
      method: "GET",
      dataType: "json"
    });

    const perPersonCost = response.data.perPersonCost;
    store.dispatch({ type: "initialise", payload: perPersonCost });
  }
});
