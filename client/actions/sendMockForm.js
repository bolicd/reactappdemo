import axios from 'axios';

export default function sendMockForm(data){
  return dispatch => {
    axios.post('/api/register', data);
  }
}
