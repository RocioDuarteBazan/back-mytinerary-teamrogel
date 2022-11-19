let cities = [
    {
        name: "New York",
        continent: "America",
        photo: "https://imageshack.com/i/pmk1kK0tj",
        population: 8.468, 
        userId: "636e67769d2ec6759994acc1"
    },

    {
        name: "Harbin", 
        continent: "Asia",
        photo: "http://assets.kompasiana.com/items/album/2022/01/28/screenshot-20220128-141908-61f3fed506310e1ed066e052.jpg",
        population: 5.841,
        userId: "636e67769d2ec6759994acc1"
    },
    {
        name: "Tokio",
        continent: "Asia",
        photo: "https://imageshack.com/i/pmufBwV3j",
        population: 13.96,
        userId: "636e67769d2ec6759994acc1"
    },
    {
        name: "Cancun",
        continent: "America",
        photo: "https://imageshack.com/i/pmKjuo0Fj",
        population: 888.797,
        userId: "636e67769d2ec6759994acc2"
    },
    {
        name: "San Carlos de Bariloche",
        continent: "America",
        photo: "https://imageshack.com/i/pmbuYKo8j",
        population: 146,
        userId: "636e67769d2ec6759994acc2"
    },
    {
        name: "Singapur",
        continent: "Asia",
        photo: "https://byevisawp-fe6d.kxcdn.com/wp-content/uploads/2021/11/inmigracion-singapur-thegem-blog-timeline-large.jpeg",
        population: 5.454,
        userId: "636e67769d2ec6759994acc2"
    },
    {
        name: "Ginebra",
        continent: "Europe",
        photo: "https://us.123rf.com/450wm/elenaphotos21/elenaphotos212003/elenaphotos21200300036/144352859-bfm-torre-de-la-catedral-y-el-r%C3%ADo-r%C3%B3dano-ginebra-suiza-hdr.jpg?ver=6",
        population: 915,
        userId: "636e67769d2ec6759994acc0"
    },
    {
        name: "Bali",
        continent: "Asia",
        photo: "https://imageio.forbes.com/specials-images/imageserve/675172642/pura-ulun-danu-bratan-temple-in-Bali-/960x0.jpg?format=jpg&width=960",
        population: 4.362,
        userId: "636e67769d2ec6759994acc0"
    },
    {
        name: "Bagan",
        continent: "Asia",
        photo: "https://upload.wikimedia.org/wikipedia/commons/3/33/Balloon_over_Bagan.jpg",
        population: 22,
        userId: "636e67769d2ec6759994acc0"
    },
    {
        name: "Amsterdam",
        continent: "Europe",
        photo: "https://media.cntraveler.com/photos/59e7addbcae8da16e6cd4af4/16:9/w_2560%2Cc_limit/Amsterdam_GettyImages-541441577.jpg",
        population: 17.193499,
        userId: "636e67769d2ec6759994acbf"
    },
    {
        name: "La Plata",
        continent: "America",
        photo: "https://imageshack.com/i/pnp5nrJsj",
        population: 724.01,
        userId: "636e67769d2ec6759994acbf"
    },
    {
        name: "South Island",
        continent: "Oceania",
        photo: "https://images.unsplash.com/photo-1465056836041-7f43ac27dcb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
        population: 1.2013,
        userId: "636e67769d2ec6759994acbf"
    }
]

require("dotenv").config();
require("../database");
const City = require("../../models/City");

cities.forEach((elemento) => {
    City.create({
        name: elemento.name,
        continent: elemento.continent,
        photo: elemento.photo,
        population: elemento.population,
        userId: elemento.userId,
    })
});