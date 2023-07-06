type GeoType = {
  lat: string;
  lng: string;
};

type AddressType = {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: GeoType;
};

type PersonResponse = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: AddressType;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

const address: GeoType = {
  lat: "123",
  lng: "123",
};

const object1: Record<string, number> = {
  test: 1,
  test2: 2,
  test3: 3,
  test4: 6,
  test5: 4,
};

const object: {
  testFunction: (param1: string) => void;
} = {
  testFunction: (param1) => {
    console.log("test");
  },
};

async function fetchPerson(): Promise<PersonResponse> {
  const apiKey = "https://jsonplaceholder.typicode.com/users/1";

  const response = await fetch(apiKey);
  const data = await response.json();

  return data;
}

fetchPerson().then((data) => {
  console.log(data.address);
});
