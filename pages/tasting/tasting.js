import store from "../../store";
import { menuController } from "../../services/controller";

Page({
  data: {
    numberOfPersons: 0,
    counterProps: {
      path: "../../pages/summary/summary",
      numberOfPersons: 1,
      maxNumberOfCustomers: 3
    },
    array: []
  },

  personsCounter(number) {
    this.setData({ numberOfPersons: number });
    const app = getApp();
    app.data = { numberOfPersons: this.data.numberOfPersons };
  },

  onLoad() {
    menuController();
    this.setData({
      array: store.getState().menu
    });
  },

});
