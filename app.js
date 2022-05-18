import store from "./store";

App({
  data: {
    numberOfPersons: 0,
    name: "lindo",
    email: "lindo@bbd.co.za",
    table: 3,
    url: "http://localhost:3000/user"
  },

  onLaunch() {
    try {
      this.initialise();
    } catch (error) {
      my.alert({content: 'fail'});
    } 
  },


  async initialise() {
    const response = await my.request({
      url: "http://localhost:3000/price",
      method: "GET",
      dataType: "json"
    });

    console.log(response.data);
  }
});
