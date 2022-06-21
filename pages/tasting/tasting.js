import store from "../../store";
import { menuController } from "../../services/menuController";
import { priceController } from "/services/priceController";

Page({
  data: {
    numberOfPersons: 0,
    counterProps: {
      path: "../../pages/summary/summary",
      numberOfPersons: 1
    },
    array: []
  },

  async onLoad() {
    await menuController();
    await priceController();
    console.log(store.getState());
    
    this.setData({
      array: store.getState().menu
    });
  }
});
