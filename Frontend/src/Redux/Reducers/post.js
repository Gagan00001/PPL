// const initialState = {
//   data: data,
// };

// function postReducer(state = initialState, action) {
//   switch (action.type) {
//     case "Single_Post":
//       return Object.assign({}, state, {
//         visibilityFilter: action.filter,
//       });
//     case ADD_TODO:
//       return Object.assign({}, state, {
//         todos: [
//           ...state.todos,
//           {
//             text: action.text,
//             completed: false,
//           },
//         ],
//       });
//     default:
//       return state;
//   }
// }
