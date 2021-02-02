import axios from 'axios';
jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;
// jest.mock('./http');
const { getUser, getCompany } = require('../http');

it('calls jasonplaceholder and returns the users company', async () => {
  mockedAxios.get.mockImplementationOnce(() =>
    Promise.resolve({
      data: {
        name: 'Romaguera-Crona',
        catchPhrase: 'Multi-layered client-server neural-net',
        bs: 'harness real-time e-markets',
      },
    })
  );

  const company = await getCompany();
  console.log(company);

  expect(company).toEqual({
    name: 'Romaguera-Crona',
    catchPhrase: 'Multi-layered client-server neural-net',
    bs: 'harness real-time e-markets',
  });

  expect(mockedAxios.get).toHaveBeenCalledTimes(1);

  expect(company.name).toEqual('Romaguera-Crona');

  // expect(mockedAxios.get).toHaveBeenCalledWith('');
});

// it('calls jsonplaceholder and returns a user object', async () => {
//   mockedAxios.get.mockImplementationOnce(() =>
//     Promise.resolve({
//       company: {
//         name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets',
//       },
//       email: 'Sincere@april.biz',
//       id: 1,
//       name: 'Leanne Graham',
//       phone: '1-770-736-8031 x56442',
//       username: 'Bret',
//       website: 'hildegard.org',
//       address: {
//         city: 'Gwenborough',
//         street: 'Kulas Light',
//         suite: 'Apt. 556',
//         zipcode: '92998-3874',
//         geo: {
//           lat: '-37.3159',
//           lng: '81.1496',
//         },
//       },
//     })
//   );

//   const users = await getUser();

//   console.log(users);
// });

// it('calls jsonplaceholder and returns a user object', async () => {
//   const user = await getUser();
//   console.log('user', user);
// });

// test('should get an object', () => {
//   const user = {
//     company: {
//       name: 'Romaguera-Crona',
//       catchPhrase: 'Multi-layered client-server neural-net',
//       bs: 'harness real-time e-markets',
//     },
//     email: 'Sincere@april.biz',
//     id: 2,
//     name: 'Leanne Graham',
//     phone: '1-770-736-8031 x56442',
//     username: 'Bret',
//     website: 'hildegard.org',
//     address: {
//       city: 'Gwenborough',
//       street: 'Kulas Light',
//       suite: 'Apt. 556',
//       zipcode: '92998-3874',
//       geo: {
//         lat: '-37.3159',
//         lng: '81.1496',
//       },
//     },
//   };

//   getUser().then((data: any) => {
//     return expect(data.id).toMatchObject(user.id);
//   });
// });
