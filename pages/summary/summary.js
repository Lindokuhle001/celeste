import store from "/store";

Page({
  data: {
    people: 0,
    cost: 0,
    tip: 0,
    customTipInput: { active: false, class: "activeTip" },
    perPersonCost: 100,
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
    console.log(event.target.dataset.value);
    this.toggleActiveTip(event.target.dataset.value.value);

    const percentage = event.target.dataset.value.value;
    this.setData({
      customTipInput: { active: false, class: "activeTip" },
      tip: (percentage * this.data.cost) / 100
    });
    console.log(this.data.tip);
  },

  addInput(event) {
    this.toggleActiveTip();

    this.setData({
      customTipInput: { active: true, class: "activeTip" },
      tip: 0
    });
  },

  addCustomTip(event) {
    const customTip = Math.abs(parseInt(event.detail.value));
    event.detail.value=""
    this.setData({
      tip: customTip
    });
  },

  onLoad() {
    // using getApp
    // const app = getApp();
    // this.setData({
    //   cost: app.data.numberOfPersons * 100,
    //   people: app.data.numberOfPersons
    // });

    // using redux

    this.setData({
      cost: store.getState().numberOfPersons * 100,
      people: store.getState().numberOfPersons
    });
    this.toggleActiveTip();

    console.log("tested");
  },
  onShow() {},

  onHide() {
    console.log("hidden");

    this.toggleActiveTip();
  },
  navigateTothankyou() {
    my.navigateTo({
      url: "../thankYou/thankYou"
    });
  }
});
