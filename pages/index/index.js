const app = getApp();

Page({
  data: {
    name: ""
  },

  onShow() {
    const self = this;
    setTimeout(() => {
      my.hideLoading({
        Page: self
      });
    }, 0);
  },

  navigateToTasting() {
    // my.showLoading({
    //   content: "loading...",
    //   delay: 0
    // });
    my.navigateTo({
      url: "../tasting/tasting"
    });
  }
});
