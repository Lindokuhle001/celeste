import store from "..//../store";

Page({
  data: {
    name: "",
    email: "",
    table: ""
  },

  onLoad() {
    this.setData({
      name: store.getState().name,
      email: store.getState().email,
      table: store.getState().table
    });
  },
  
  redirectToHome() {
    my.redirectTo({
      url: "../index/index"
    });
  }
});
