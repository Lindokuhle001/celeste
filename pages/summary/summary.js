import store from "/store";

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
    console.log("hi");
    
    console.log(this.GetAuthCodeOnSimulator());
    console.log("hi");

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

  postOrder() {
    my.request({
      url: "http://localhost:3000/orders",
      method: "POST",
      data: {
        numberOfPeople: this.data.people,
        cost: this.data.cost,
        tip: this.data.tip
      }
    });

    this.navigateTothankyou();
  },

  navigateTothankyou() {
    my.navigateTo({
      url: "../thankYou/thankYou"
    });
  },

  async GetAuthCodeOnSimulator() {
    const clientId = "2020122325111778413994";
    const userId = "216610000000446291765";

    const options = {
      method: "POST",
      url:
        "https://vodapay-gateway.sandbox.vfs.africa/v2/authorizations/applyAuthCode",
      headers: {
        "Content-Type": "application/json",
        "client-id": clientId,
        "request-time": "2021-02-22T17:49:26.913+08:00",
        signature: "algorithm=RSA256, keyVersion=1, signature=testing_signatur",
        "SOFA-TraceId": "20210224000010086009",
        "SOFA-RpcId": "0"
      },
      data: {
        clientId,
        userId,
        scopes: "auth_user"
      }
    };
    const response = await my.request(options);
    my.alert({
      title: "Auth on Simulator",
      content: response.data.authCode
    });

    return response.data.authCode;
  }
});
