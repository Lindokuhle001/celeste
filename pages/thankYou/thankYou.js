import store from "..//../store";

Page({
  data: {
    name: "",
    email: "",
    table: ""
  },
  onLoad() {
    const app = getApp();

    console.log(app);

    this.setData({
      name: store.getState().name,
      email: store.getState().email,
      table: store.getState().table
    });

    console.log(
      store.getState().table,
      store.getState().email,
      store.getState().name
    );
  },
  redirectToHome() {
    my.redirectTo({
      url: "../index/index"
    });
  }
});
