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
      name: app.data.name,
      email: app.data.email,
      table: app.data.table
    });

    console.log(app.data.table, app.data.email, app.data.name);
  },
  redirectToHome() {
    my.redirectTo({
      url: "../index/index"
    });
  }
});
