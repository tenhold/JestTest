declare module 'getUsers' {
  export type company = {
    name: string;
    catchPhrase: string;
    bs: string;
  };

  export type geo = {
    lat: string;
    lng: string;
  };

  export type address = {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: geo;
  };

  export type user = {
    id: number;
    name: string;
    username: string;
    email: string;
    address: address;
    phone: string;
    website: string;
    company: company;
  };
}
