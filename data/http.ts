import axios from 'axios';

interface user {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  geo: {
    lat: string;
    lng: string;
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export const getUser = async (): Promise<user> => {
  const user = await axios.get('https://jsonplaceholder.typicode.com/users/1');

  return user.data;
};
