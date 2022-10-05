import axios from "axios";
import {
  fetchingInProgress,
  fetchingSuccess,
  fetchingError,
} from "./contactsSlice";

axios.defaults.baseURL = "https://6335c71b8aa85b7c5d22f8f7.mockapi.io";

export const fetchContacts = () => async dispatch => {
  try {
    dispatch(fetchingInProgress())
    const response = await axios.get('/contacts')
    dispatch(fetchingSuccess(response.data))
  } catch (error) {
    dispatch(fetchingError(error.message))
  }
}