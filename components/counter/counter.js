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
      this.setData({
        numberOfPersons: --this.data.numberOfPersons
      });
      this.props.onRun(this.data.numberOfPersons);
    },
    increasePersons() {
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
