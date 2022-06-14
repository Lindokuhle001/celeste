import { getAuthCode } from "../../services/authentication";
import { request } from "../../services/request";
import store from "../../store";

Page({
  data: {
    name: ""
  },

  async onLoad() {
    const authResponse = await getAuthCode();
    const authCode = authResponse;

    const method = "POST";
    const headers = {
      "Content-Type": "application/json"
    };
    const url = "https://celesteapi.herokuapp.com/login";
    const data = JSON.stringify({
      authCode,
      merchantid: "216620000000188034591"
    });
    const response = request(url, headers, data, method);
  },

  onShow() {

    console.log(store.getState(), "hi");

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
