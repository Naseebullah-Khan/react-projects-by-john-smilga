// reducer function
const reducer = (state, action) => {
  if (action.type === "ADD_PERSON") {
    return {
      ...state,
      people: [...state.people, action.payload],
      isModalOn: true,
      modalContent: "Person is Added",
    };
  }
  if (action.type === "EDIT_PERSON") {
    return {
      ...state,
      people: action.payload,
      isModalOn: true,
      modalContent: "Edited the person",
    };
  }
  if (action.type === "REMOVE_PERSON") {
    return {
      ...state,
      people: action.payload,
      isModalOn: true,
      modalContent: "Removed the Person",
    };
  }
  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOn: true,
      modalContent: "Please enter the value",
    };
  }
  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOn: false };
  }
  throw new Error("No matching action type");
};

export default reducer;
