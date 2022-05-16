export default function counterReducer(state = { numberOfPersons: 1 }, action) {
  switch (action.type) {
    case "counter/incremented":
      return {
        ...state,
        numberOfPersons: state.numberOfPersons + 1
      };
    case "counter/decremented":
      return {
        ...state,
        numberOfPersons: state.numberOfPersons - 1
      };
    default:
      return state;
  }
}
// export { counterReducer };
