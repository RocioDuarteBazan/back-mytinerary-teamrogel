let users = [
    {
        name: "Aldana",
        lastName: "Bravo",
        role: "admin",
        photo:
            "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
        age: 25,
        email: "aldichavez@gmail.com",
        password: "Chau6789",
        code: "10",
        verified: true,
        logged: true,
    },
    {
        name: "Andres",
        lastName: "Martinez Guiral",
        role: "admin",
        photo:
            "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
        age: 24,
        email: "andresmg@gmail.com",
        password: "Chau6779",
        code: "11",
        verified: true,
        logged: true,
    },
    {
        name: "Hugo",
        lastName: "Smahlij",
        role: "admin",
        photo:
            "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
        age: 26,
        email: "hsmahlij@gmail.com",
        password: "Chau6769",
        code: "12",
        verified: true,
        logged: true,
    },
    {
        name: "Cristian",
        lastName: "Costa",
        role: "admin",
        photo:
            "https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg",
        age: 24,
        email: "criscostal@gmail.com",
        password: "Chau6759",
        code: "13",
        verified: true,
        logged: true,
    },
];

require("dotenv").config();
require("../database");
const User = require("../../models/User");

users.forEach((elemento) => {
    User.create({
        name: elemento.name,
        lastName: elemento.lastName,
        role: elemento.role,
        photo: elemento.photo,
        age: elemento.age,
        email: elemento.email,
        password: elemento.password,
        code: elemento.code,
        verified: elemento.verified,
        logged: elemento.logged,
    })
});