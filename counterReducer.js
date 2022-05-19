export default function counterReducer(
  state = { numberOfPersons: 1, perPersonCost: 0, menu: [] },
  action
) {
  switch (action.type) {
    case "initialise":
      return {
        ...state,
        perPersonCost: action.payload
      };
    case "added menu":
      return {
        ...state,
        menu: action.payload
      };

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
