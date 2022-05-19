import store from "../../store";

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
        this.setData({
      array: store.getState().menu
    });

    // try {
    //   this.initialise();
    // } catch (error) {
    //   my.alert({ content: "fail" });
    // }
  }

  // async initialise() {
  //   const response = await my.request({
  //     url: "http://localhost:3000/menu",
  //     method: "GET",
  //     dataType: "json"
  //   });

  //   const menu = response.data;
  //   store.dispatch({ type: "added menu", payload: menu });
  //   this.setData({
  //     array: store.getState().menu
  //   });
  // }
});
