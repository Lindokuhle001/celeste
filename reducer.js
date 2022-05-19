export default function reducer(
  state = { numberOfPersons: 1, perPersonCost: 0, menu: [] },
  action
) {
  switch (action.type) {
    case "added user details":
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        table: action.payload.table,
        maxNumberOfCustomers: action.payload.maxNumberOfPeople
      };

    case "added price":
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
