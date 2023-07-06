"use strict";
let x = 0;
x = "test";
function sum(param1, param2) {
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
const person = {
    name: "John",
    email: "email@gmail.com",
};
const person2 = {
    name: "John",
    email: "email@gmail.com",
    phoneNumber: "22334455",
};
const person3 = {
    name: "John",
};
const person4 = {
    name: "John",
    email: "email@gmail.com",
    password: "123456",
};
function parsePerson(personToParse) { }
parsePerson(person4);
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
const someProject = {
    name: "Some project",
    description: "Some description",
    clients: persons,
};
