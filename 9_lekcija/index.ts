type StringOrNumber = number | string;

let x: StringOrNumber = 0;

x = "test";

function sum(param1: StringOrNumber, param2: StringOrNumber) {
  if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  }
  if (typeof param1 === "string" && typeof param2 === "string") {
    return `${param1} ${param2}`;
  }

  throw new Error("Parameters must be numbers or strings");
}

const sumResult = sum(1, 2);
const sumResult1 = sum("test", "test1");

type Person = {
  name: string;
  email: string;
  password: string;
  phoneNumber?: string;
};

const person: Pick<Person, "name" | "email"> = {
  name: "John",
  email: "email@gmail.com",
};

const person2: Omit<Person, "password"> = {
  name: "John",
  email: "email@gmail.com",
  phoneNumber: "22334455",
};

const person3: Partial<Person> = {
  name: "John",
};

const person4: Person = {
  name: "John",
  email: "email@gmail.com",
  password: "123456",
};

function parsePerson(personToParse: Required<Person>) {}

parsePerson(person4 as Required<Person>);

type Project = {
  name: string;
  description: string;
  clients: Person[];
};

type BodyType = {
  bodyType: "slim" | "fat";
};

const persons = [
  {
    name: "John",
    email: "email@gmail.com",
    password: "123456",
  },
  {
    name: "Anna",
    email: "email@gmail.com",
    password: "123456",
  },
];

const someProject: Project = {
  name: "Some project",
  description: "Some description",
  clients: persons,
};
