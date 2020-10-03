import { login } from "../Actions";

const initialState = {
  Username: "",
  Email: "",
  FirstName: "",
  LastName: "",
};

const Reducer = (state = initialState, action) => {
  console.log("Reducer -> action", action);
  switch (action.type) {
    case "Login":
      return { ...state };  }
};
export default Reducer;