import { getAuthCode } from "../../services/authentication";
import { request } from "../../services/request";
const app = getApp();

Page({
  data: {
    name: ""
  },

  onLoad() {
    const authCode = getAuthCode();
    // const merchantid = 216620000000188034591;
    const method = "POST";
    const headers = {
      "Content-Type": "application/json"
    };
    const url = "http://localhost:3000/login";
    const data = JSON.stringify({
      authCode,
      merchantid: "216620000000188034591"
    });
    const response = request(url, headers, data, method);
    console.log(response);
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
