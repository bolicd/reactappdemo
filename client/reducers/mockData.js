
let defaultState = 
{
  news: []
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case "GET_MOCK_DATA":
    return Object.assign({}, state, {
      news: action.payload
    });
    default:
      return state;
  }
};
