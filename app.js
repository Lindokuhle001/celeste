// import store from "./store";
import { menuController } from "./services/controller";
import { priceController } from "./services/priceController";

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
    priceController();
    // try {
    //   this.getPrice();
    // } catch (error) {
    //   my.alert({ content: "fail" });
    // }
  }
});
