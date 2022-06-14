import store from "../../store";
import { menuController } from "../../services/menuController";
import { userController } from "/services/userController";

Page({
  data: {
    numberOfPersons: 0,
    counterProps: {
      path: "../../pages/summary/summary",
      numberOfPersons: 1
    },
    array: []
  },

  onLoad() {
    menuController();
    userController();
    console.log("hi");
    
    console.log(store.getState(), "hi");

    this.setData({
      array: store.getState().menu
    });
  }
});
