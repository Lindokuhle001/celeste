App({
  data: {
    numberOfPersons: 0,
    name: "lindo",
    email: "lindo@bbd.co.za",
    table: 3
  },

  onLaunch(options) {
    // called when opened
  },
  onShow(options) {
    // called when opened or come foreground
  },
  onHide() {
    // called when it goes background
  },
  onError(msg) {
    // called on JavaScript error or API invoke exception
    // console.log(msg);
  },
  // global data
  globalData: {
    foo: true
  }
});
