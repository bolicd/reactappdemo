export default (state = [], action = {}) => {
  switch (action.type) {
    case "GET_MOCK_DATA":
      return [
        ...state,
        {
          type: action.type,
          data: action.payload
        }
      ];
    default:
      return state;
  }
};
