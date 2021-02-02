import axios from 'axios';
import { company, user } from 'getUsers';

export const getUser = async (): Promise<user> => {
  try {
    const user = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    return user.data;
  } catch (err) {
    console.warn(err);
    return err;
  }
};

export const getCompany = async (): Promise<company> => {
  try {
    const user = await axios.get(
      'https://jsonplaceholder.typicode.com/users/1'
    );
    return user.data;
  } catch (err) {
    console.warn(err);
    return err;
  }
};
