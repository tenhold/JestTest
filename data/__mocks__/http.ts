import { user } from 'getUsers';

export const getUser = async (): Promise<user> => {
  console.log('mock test');
  return Promise.resolve({
    company: {
      name: 'Romaguera-Crona',
      catchPhrase: 'Multi-layered client-server neural-net',
      bs: 'harness real-time e-markets',
    },
    email: 'Sincere@april.biz',
    id: 1,
    name: 'Leanne Graham',
    phone: '1-770-736-8031 x56442',
    username: 'Bret',
    website: 'hildegard.org',
    address: {
      city: 'Gwenborough',
      street: 'Kulas Light',
      suite: 'Apt. 556',
      zipcode: '92998-3874',
      geo: {
        lat: '-37.3159',
        lng: '81.1496',
      },
    },
  });
};
