import axios from 'axios';

export const getpopulardishes = async () => {
  try {
    const URL =
      'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/';
    const response = await axios({
      url: URL,
      method: 'GET',
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
    return err;
  }
};

export const getparticulardish = async () => {
  try {
    const URL =
      'https://8b648f3c-b624-4ceb-9e7b-8028b7df0ad0.mock.pstmn.io/dishes/v1/1';
    const response = await axios({
      url: URL,
      method: 'GET',
    });
    return response.data;
  } catch (err) {
    console.log(err.message);
    return err;
  }
};
