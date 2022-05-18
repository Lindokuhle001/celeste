export default function counterReducer(
  state = { numberOfPersons: 1, perPersonCost: 0 },
  action
) {
  switch (action.type) {
    case "initialise":
      console.log(action);
      
      return {
        ...state,
        perPersonCost: action.payload
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
