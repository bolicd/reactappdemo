import { GET_MOCK_DATA, GET_MOCK_DATA_LOADING } from "./types";
import axios from "axios";

export default function getMockData() {
  return dispatch => {
    dispatch({ type: GET_MOCK_DATA_LOADING });
    const request = axios.get("/api/news");

    request
      .then(data => {
        dispatch({ type: GET_MOCK_DATA, payload: data });
      })
      .catch(err => {
        dispatch({ type: "GET_MOCK_DATA_FAILED", payload: err.data.message });
      });
  };
}
