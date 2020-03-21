const initialState = {
  users: [],
  totalPages: 0,
  currentPage: 1
};
const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_USER": {
      const cloneUsers = [...state.users, ...action.payload.users];
      return {
        ...state,
        currentPage: action.payload.currentPage,
        users: cloneUsers,
        totalPages: action.payload.totalPages
      };
    }
    default:
      return state;
  }
};

export default userReducer;
