let reactions = [
    {
        itineraryId: '6370190440f5e529cd1a3782',
        name: 'like',
        icon: 'https://cdn-icons-png.flaticon.com/512/889/889140.png',
        iconBack: 'https://cdn.icon-icons.com/icons2/1392/PNG/512/like_96682.png',
        userId: ['63814f567fdd927b0b0d8980'],
    },
    {
        itineraryId: '6370190440f5e529cd1a3782',
        name: 'not-like',
        icon: 'https://cdn-icons-png.flaticon.com/512/889/889220.png',
        iconBack: 'https://cdn-icons-png.flaticon.com/512/126/126504.png',
        userId: ['63814f567fdd927b0b0d8980'],
    },
    {
        itineraryId: '6370190440f5e529cd1a3782',
        name: 'love',
        icon: 'https://cdn-icons-png.flaticon.com/512/833/833472.png',
        iconBack: 'https://cdn-icons-png.flaticon.com/512/1077/1077035.png',
        userId: ['63814f567fdd927b0b0d8980'],
    },
    {
        itineraryId: '6370190440f5e529cd1a3782',
        name: 'surprise',
        icon: 'https://cdn-icons-png.flaticon.com/512/742/742925.png',
        iconBack: 'https://cdn-icons-png.flaticon.com/512/2958/2958976.png',
        userId: ['63814f567fdd927b0b0d8980'],
    }
]

require("dotenv").config();
require("../database");
const Reaction = require("../../models/Reaction");

reactions.forEach((elemento) => {
    Reaction.create(
        {
            itineraryId: elemento.itineraryId,
            name: elemento.name,
            icon: elemento.icon,
            iconBack: elemento.iconBack,
            userId: elemento.userId
        }
    )
})