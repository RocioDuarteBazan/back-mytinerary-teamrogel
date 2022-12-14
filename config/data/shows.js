let shows = [
    {
        hotelId: "63702ed5fb38509b72d3862a",
        name: "Adele acoustic show ",
        photo: "https://secondstorygarage.com/wp-content/uploads/2015/12/Adele.jpg",
        description: "English pop singer and songwriter whose soulful emotive voice and traditionally crafted songs made her one of the most broadly popular performers of her generation.",
        price: 150,
        date: "2022-11-12",
        userId: "636e7868b2ea2713548222b7"
    },
    {
        hotelId: "63702ed5fb38509b72d3862a",
        name: "Jerry Seinfeld ",
        photo: "https://m.media-amazon.com/images/M/MV5BMTYxMDkwMjM5NV5BMl5BanBnXkFtZTcwMzUxMTgxNw@@._V1_.jpg",
        description: "He was born in 1954, in the neighborhood of Brooklyn, in New York, United States. He is a well-known comedian, actor and writer for film and television, famous mainly for his semi-fictional character in the series “Seinfeld",
        price: 80,
        date: "2022-12-05",
        userId: "636e7868b2ea2713548222b7"
    },
    {
        hotelId: "63702ed5fb38509b72d3862b",
        name: "Babasonicos",
        photo: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2017/12/Babasonicos-8337-ceci-2000.jpg",
        description: "Babasónicos is an Argentine rock band, formed in the early 1990s along with others such as Peligrosos Gorriones and Los Brujos. After emerging in the wave of Argentine New Rock bands of the late '80s and early '90s, Babasonicos became one of the banner groups of the sonic underground rock movement in Argentina in the late 1990s.",
        price: 20,
        date: "2022-12-08",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        hotelId: "63702ed5fb38509b72d3862b",
        name: "Virus",
        photo: "https://es.rollingstone.com/wp-content/uploads/2022/05/VIRUS_NACHO-ARNEDO-1096-8.jpg",
        description: "Virus is the maximum expression of modernity in Argentine rock. This band from La Plata, which in many aspects led the local scene of the decade, stood out in 1981 with a very frontal attitude at a time of general rigidity. They were ironic when solemnity reigned in Argentine rock. They were romantics when dark disenchantment reigned.",
        price: 30,
        date: "2022-12-05",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        hotelId: "63702ed5fb38509b72d3862c",
        name: "Dread Mar-i",
        photo: "https://geniuslyrics.net/i/bands/350/dread-mar-i.jpg",
        description: "Mariano Javier Castro, better known as Dread Mar-I, is a singer and songwriter of Argentine origin, born on January 31, 1978, known for introducing a new musical style in terms of Reggae, Roots and Lover.",
        price: 20,
        date: "2022-11-23",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        hotelId: "63702ed5fb38509b72d3862c",
        name: "Marco Antonio Solis",
        photo: "https://upload.wikimedia.org/wikipedia/commons/0/05/MarcoAntonioSolisCollage-1-1000_adjusted.jpg",
        description: "Together with his cousin Joel Solís, he was the founder of the musical group Los Bukis, of which he is the vocalist, musician, producer and author of most of their songs; at the beginning he played the keyboards and later the timpani and the guitar.",
        price: 50,
        date: "2022-12-02",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        hotelId: "63702ed5fb38509b72d3862d",
        name: "Pumpkin Fest 2",
        photo: "https://www.thekeenepumpkinfestival.com/wp-content/uploads/2019/04/pumpkin-995416_1920.jpg",
        description: "Pumpkinfest is a family-friendly day in Downtown Montague with many pumpkin-inspired events, contests, and features. There will be Artisan Market and Farmer's Market, bake sale, best pumpkin pie contest, biggest pumpkin weigh-in contest, pumpkin painting, cider mill, pumpkin seed spitting contest, carved pumpkin contest, pumpkin chucking, pet costume contest, hayrides, kid's activities, music, entertainment, food vendors, and more!",
        price: 36,
        date: "2022-11-20",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        hotelId: "63702ed5fb38509b72d3862d",
        name: "Cirque du Soleil",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/b3/84/bf.jpg",
        description: "Enjoy table and tablecloth dinner along with Cirque du Soleil®'s JOYÀ show at the Vidanta Riviera Maya resort. You will be fascinated by the story of an alchemist and his granddaughter in search of the secrets of life. The show draws on the heritage and history of Mexico to weave the story together, presented in an intimate theater and followed by dinner in the Riviera Maya jungle.",
        price: 100,
        date: "2022-12-01",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        hotelId: "63702ed5fb38509b72d38628",
        name: "Go-kart tour Shinjuku drive metroporitan area",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/0f/44/c3/59.jpg",
        description: "Visitors to Tokyo seeking a fun and quirky experience should look no further than this go-kart tour of Shinjuku. To make sure you stand out from the crowds even further you can don a cartoon character costume for your ride. This is an ideal way to have fun with friends while seeing the sights and making memories you'll never forget.",
        price: 131,
        date: "2022-11-12",
        userId: "636e67769d2ec6759994acc1"
    },
    {
        hotelId: "63702ed5fb38509b72d38628",
        name: "Cheap Trick",
        photo: "https://silenciowp.s3.amazonaws.com/wp-content/uploads/2017/12/Cheap-Trick-David-McClister-2000.jpg",
        description: "They were truly fantastic! They always throughly entertain me, each and every time I see them. If you're one of those people that say “Oh I seen them back in the 70/80's they were good”. Go see them now they're awesome! I believe this is the best version of Cheap Trick EVER! I've been a fan for 45 years and seen them so many times I've lost count. Trust me you won't be disappointed!",
        price: 47,
        date: "2022-12-12",
        userId: "636e67769d2ec6759994acc1"
    },
    {
        hotelId: "63702ed5fb38509b72d38629",
        name: "Laguna Paron Day Tour",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/99/00/a5.jpg",
        description: "Between 8-9 AM we will pick you up from your hotel (hour confirmed by text message the evening before). During this day trip, you will first have a short break (~45 mins) in the town of Carhuaz, where you can have some authentic Andean ice cream and fruits for breakfast. Then, you will arrive to the massive Laguna Paron, with breathtaking views of Artesonraju mountain, the Paramount Studios logo. An entrance fee of 5 soles must be paid to the local community at arrival. Here you will have different options to enjoy your time (~2h30): go canoeing/kayaking in the lake, hike a short path uphill to a viewpoint or simply relax near the lake. There is a restaurant in front of the lake for a typical lunch menu (~15/20 soles).",
        price: 45,
        date: "2022-11-30",
        userId: "636e67769d2ec6759994acc1"
    },
    {
        hotelId: "63702ed5fb38509b72d38629",
        name: "Lanzarote Volcanoes Small Group Guided Tour",
        photo: "https://media.tacdn.com/media/attractions-splice-spp-674x446/07/20/68/c0.jpg",
        description: "Exploring Lanzarote's volcanoes without a guide may risk missing the best sights and gaining only a sketchy knowledge of the region. With this small-group tour, see and learn about the scenic highpoints on a route through the Los Volcanes Natural Park. Walk the plains past volcanic cones and lava structures, discover how they were formed by 18th-century eruptions, and look for signs of life in the extreme ecosystem. Hotel pickup and drop-off included.    ",
        price: 50,
        date: "2022-12-17",
        userId: "636e67769d2ec6759994acc1"
    }
]

require("dotenv").config();
require("../database");
const Show = require("../../models/Show");

shows.forEach((elemento) => {
    Show.create({
        hotelId: elemento.hotelId,
        name: elemento.name,
        photo: elemento.photo,
        description: elemento.description,
        price: elemento.price,
        date: elemento.date,
        userId: elemento.userId,
    })
});


