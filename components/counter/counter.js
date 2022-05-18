import store from "../../store";

Component({
  mixins: [],
  data: { numberOfPersons: 0, maxNumberOfCustomers: 0 },
  props: {
    value: "",
    onRun() {}
  },
  didMount() {
    this.setData({
      numberOfPersons: this.props.value.numberOfPersons,
      maxNumberOfCustomers: this.props.value.maxNumberOfCustomers
    });
    this.props.onRun(this.data.numberOfPersons);
  },
  didUpdate() {},
  didUnmount() {},
  methods: {
    decreasePersons() {
      store.dispatch({ type: "counter/decremented" });
      console.log(store.getState()); 

      this.setData({
        numberOfPersons: --this.data.numberOfPersons
      });
      this.props.onRun(this.data.numberOfPersons);
    },
    increasePersons() {
      store.dispatch({ type: "counter/incremented" });
      console.log(store.getState());

      this.setData({
        numberOfPersons: ++this.data.numberOfPersons
      });
      this.props.onRun(this.data.numberOfPersons);
    },
    navigateToSummary() {
      my.navigateTo({
        url: this.props.value.path
      });
    }
  }
});
