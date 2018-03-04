import { GET_MOCK_DATA, GET_MOCK_DATA_LOADING } from "./../actions/types";

let defaultState = 
{
  loading: false,
  news: []
};

export default (state = defaultState, action = {}) => {
  switch (action.type) {
    case GET_MOCK_DATA_LOADING:
    return Object.assign({}, state, {
      loading: true
    }); 
    case GET_MOCK_DATA:
    return Object.assign({}, state, {
      loading: false,
      news: action.payload
    });
    default:
      return state;
  }
};
