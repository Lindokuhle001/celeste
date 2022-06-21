import store from "/store";
import request from "../../services/request";

Page({
  data: {
    people: 0,
    cost: 0,
    tip: 0,
    customTipInput: { active: false, class: "activeTip" },
    perPersonCost: 0,
    tipArray: [
      { value: 10, class: "" },
      { value: 15, class: "" },
      { value: 20, class: "" }
    ]
  },

  toggleActiveTip(tipValue) {
    const newTipsArray = this.data.tipArray;
    newTipsArray.forEach(element => {
      if (element.value == tipValue) {
        element.class = "activeTip";
      } else {
        element.class = "";
      }
    });

    this.setData({
      tipArray: newTipsArray
    });
  },

  addTip(event) {
    this.toggleActiveTip(event.target.dataset.value.value);

    const percentage = event.target.dataset.value.value;
    this.setData({
      customTipInput: { active: false, class: "activeTip" },
      tip: (percentage * this.data.cost.toFixed(2)) / 100
    });
  },

  addInput(event) {
    this.toggleActiveTip();

    this.setData({
      customTipInput: { active: true, class: "activeTip" },
      tip: 0
    });
  },

  addCustomTip(event) {
    const customTip = Math.abs(parseInt(event.detail.value).toFixed(2));
    event.detail.value = "";
    this.setData({
      tip: customTip
    });
  },

  onLoad() {
    this.setData({
      cost:
        store.getState().numberOfPersons *
        store.getState().perPersonCost.toFixed(2),
      people: store.getState().numberOfPersons,
      perPersonCost: store.getState().perPersonCost
    });
    this.toggleActiveTip();
  },

  onShow() {},

  onHide() {
    this.toggleActiveTip();
  },

  async postOrder() {
    const response = await my.request({
      url: "https://celesteapi.herokuapp/pay",
      method: "POST",
      data: {
        productCode: "CASHIER_PAYMENT",
        salesCode: "51051000101000000011",
        paymentRequestId: "lind1b17161398737179310015310", //uuid
        paymentNotifyUrl: "https://celesteapi.herokuapp/payment-notification",
        paymentExpiryTime: "2022-07-22T17:49:31+08:00",
        paymentAmount: {
          currency: "ZAR",
          value: "6234"
        },
        order: {
          goods: {
            referenceGoodsId: "goods123",
            goodsUnitAmount: {
              currency: "ZAR",
              value: "6234"
            },
            goodsName: "mobile1"
          },
          env: {
            terminalType: "MINI_APP"
          },
          orderDescription: "Car",
          buyer: {
            referenceBuyerId: "216610000000259832353"
          }
        }
      }
    });

    console.log(response.data.redirectActionForm.redirectUrl);

    my.tradePay({
      paymentUrl: response.data.redirectActionForm.redirectUrl, // get the payment from the OpenAPI first
      success: res => {
        my.alert({
          content: JSON.stringify(res)
        });
      },
      fail: res => {
        my.alert({
          content: JSON.stringify(res)
        });
      }
    });

    this.navigateTothankyou();
  },

  navigateTothankyou() {
    my.navigateTo({
      url: "../thankYou/thankYou"
    });
  },

  // getUserDetails() {
  //   my.alert({
  //     title: "give celeste your personal info",
  //     content: ""
  //   });
  // },

  makePayment() {
    request();
  }
});
