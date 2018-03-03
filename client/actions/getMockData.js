import { GET_MOCK_DATA } from "./types";
import axios from "axios";

export default function getMockData() {
  console.log(GET_MOCK_DATA); // resolve why this hasnt imported!
  debugger;

  return dispatch => {
    dispatch({ type: "GET_MOCK_DATA_LOADING" });
    const request = axios.get("/api/news");

    request
      .then(data => {
        dispatch({ type: "GET_MOCK_DATA", payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_MOCK_DATA_FAILED", payload: err.data.message });
      });
  };
}
