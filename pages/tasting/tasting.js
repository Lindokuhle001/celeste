Page({
  data: {
    numberOfPersons: 0,
    counterProps: {
      path: "../../pages/summary/summary",
      numberOfPersons: 1,
      maxNumberOfCustomers: 3
    },
    array: [
      {
        meal: "Glazed oysters with zucchini pearls and sevruga caviar",
        drink: "Wine pairing: kleine zalze brut rose"
      },
      {
        meal:
          "Seared anhi tuna with provincial vegetables and tapenade croutons",
        drink: "Wine pairing: bizoe semillon"
      },
      {
        meal: "Bream with asparagus, tempura mussels and a lime velouté",
        drink: "Wine pairing:  red city blend"
      },
      {
        meal: "Aged gouda with espresso, hazelnut and onion",
        drink: "Wine pairing: thelema early harvest"
      },
      {
        meal: "Aged gouda with espresso, hazelnut and onion",
        drink: "Wine pairing: thelema early harvest"
      },
      {
        meal: "Aged gouda with espresso, hazelnut and onion",
        drink: "Wine pairing: thelema early harvest"
      },
      {
        meal: "Aged gouda with espresso, hazelnut and onion",
        drink: "Wine pairing: thelema early harvest"
      },
      {
        meal: "Aged gouda with espresso, hazelnut and onion",
        drink: "Wine pairing: thelema early harvest"
      },
      {
        meal: "Aged gouda with espresso, hazelnut and onion",
        drink: "Wine pairing: thelema early harvest"
      },
      {
        meal: "Aged gouda with espresso, hazelnut and onion",
        drink: "Wine pairing: thelema early harvest"
      },
      {
        meal: "Dark chocolate panna cotta with a rhubarb and cherry compote",
        drink: "Wine pairing: clarington sauvignon blanc"
      }
    ]
  },

  personsCounter(number) {
    this.setData({ numberOfPersons: number });
    const app = getApp();
    app.data = { numberOfPersons: this.data.numberOfPersons };
    // console.log(this.data.numberOfPersons);
  },

  onLoad() {}
});
