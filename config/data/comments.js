let comment = [
    {
        "showId": "6371214482bcde371f76de34",
        "comment": "¡I love it!",
        "userId": "63814f567fdd927b0b0d8980",
        "date": "2022-12-12"
    },
    {
        "showId": "6371214482bcde371f76de34",
        "comment": "I don't like it",
        "userId": "63814f567fdd927b0b0d8980",
        "date": "2022-12-15"
    },
    {
        "showId": "6371214482bcde371f76de34",
        "comment": "Wiii",
        "userId": "63814f567fdd927b0b0d8980",
        "date": "2023-05-01"
    },
    {
        "showId": "6371214482bcde371f76de34",
        "comment": "Sorry i didn't like it at all",
        "userId": "63814f567fdd927b0b0d8980",
        "date": "2023-04-12"
    },
    {
        "showId": "6371214482bcde371f76de35",
        "comment": "¡Amazing!",
        "userId": "636e67769d2ec6759994acc1",
        "date": "2023-05-15"
    },
    {
        "showId": "6371214482bcde371f76de35",
        "comment": "Nice!",
        "userId": "636e67769d2ec6759994acc1",
        "date": "2023-08-12"
    },

]

require("dotenv").config();
require("../database");
const Comment = require("../../models/Comment");

comment.forEach((element) => {
    Comment.create(
        {
            showId: element.showId,
            comment: element.comment,
            date: element.date,
            userId: element.userId
        }
    )
})