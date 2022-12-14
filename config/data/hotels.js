let hotels = [
    {
        name: "JW Marriott Hotel Harbin River North",
        photo: [
            "https://cache.marriott.com/content/dam/marriott-renditions/HRBJW/hrbjw-exterior-4739-hor-clsc.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1215px",
            "https://ak-d.tripcdn.com/images/200g0c00000066iwtD07D_R_1100_824_R5_Q70_D.jpg",
            "https://ak-d.tripcdn.com/images/220d180000014xcfe2062_R_800_525.jpg"
        ],
        capacity: 1855,
        cityId: "636e9b1f37a6690656b36eba", 
        userId: "636e67769d2ec6759994acc1"
    },
    {
        name: "Marina Sands Bay Hotel-Casino",
        photo: [
            "https://www.visitsingapore.com/content/dam/desktop/global/see-do-singapore/recreation-leisure/marina-bay-sands-carousel01-square.jpg",
            "https://www.marinabaysands.com/content/dam/revamp/restaurants/restaurant-details/club55/Club55-Private-Event_1920x843.jpg",
            "https://www.marinabaysands.com/content/dam/revamp/attractions/infinity-pool/infinity-pool-1-d.jpg"
        ],
        capacity: 3900,
        cityId: "636eace4a935a04b1dbb4e25",
        userId: "636e67769d2ec6759994acc1"
    },
    {
        name: "Four season resort ",
        photo: [
            "https://i0.wp.com/thisbugslife.com/wp-content/uploads/2022/08/f0fa3c43fb8bd90c5080bb19cf9f8ba4.jpg?ssl=1",
            "https://a.cdn-hotels.com/gdcs/production144/d1960/e7cad94e-be27-4078-a131-5b049d23a0cc.jpg",
            "https://images.squarespace-cdn.com/content/v1/53e1e525e4b091ac3336f302/1410423105705-YT7B849V1TEQR4YM0HHB/Picture1.jpg?format=1500w"
        ],
        capacity: 1200,
        cityId: "636e9b1f37a6690656b36ec0", 
        userId: "636e67769d2ec6759994acc1"
    },
    {
        name: "Rainforest retreat",
        photo: [
            "https://rainforest.nz/wp-content/uploads/2020/05/rainforest_deluxe_tree_house-10.jpg",
            "https://rainforest.nz/wp-content/uploads/2020/05/rainforest_deluxe_tree_lodge-8.jpg",
            "https://static2.stuff.co.nz/1366760926/207/8591207.jpg"
        ],
        capacity: 800,
        cityId: "636e9b1f37a6690656b36ec4",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        name: "Hotel Temple View Bagan ",
        photo: [
            "https://pix8.agoda.net/hotelImages/3645933/-1/cca12106489651328afac87adafbb5d2.jpg?ca=7&ce=1&s=1024x768",
            "https://pix8.agoda.net/hotelImages/3645933/-1/0844a9b6942c4d6e20ec28f3babac227.jpg?ca=10&ce=1&s=1024x768",
            "https://pix8.agoda.net/hotelImages/3645933/-1/c88d8388f824b76b5d5b9ac69fbe1224.jpg?ca=10&ce=1&s=1024x768"
        ],
        capacity: 700,
        cityId: "636e9b1f37a6690656b36ec1",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        name: "Park inn by radisson amsterdam city west",
        photo: [
            "https://pix10.agoda.net/hotelImages/5811342/-1/65aa5ac17f4b7958d362d1d64c2eecfb.jpg?ca=7&ce=1&s=1024x768",
            "https://media.radissonhotels.net/image/park-inn-by-radisson-amsterdam-city-west/restaurant/16256-114784-f74511872_3xl.jpg?impolicy=Card",
            "https://media.radissonhotels.net/image/park-inn-by-radisson-amsterdam-city-west/guestroom/16256-114784-f74511818_3xl.jpg?impolicy=GalleryLightbox"
        ],
        capacity: 2000,
        cityId: "636eace4a935a04b1dbb4e29",
        userId: "636e67769d2ec6759994acc2"
    },
    {
        name: "New York-New York Hotel & Casino ",
        photo: [
            "https://www.kayak.com.ar/rimg/himg/73/ef/af/leonardo-2723999-NY_Exterior_O-284257.jpg?width=1366&height=768&crop=true",
            "https://a.cdn-hotels.com/gdcs/production21/d553/f598455d-3c17-4077-bcdf-2e2745a6d229.jpg",
            "https://www.kayak.com.ar/rimg/himg/64/f5/cf/leonardo-1051150-NYNY_Spa_Suite_O-556878.jpg?width=720&height=576&crop=true"
        ],
        capacity: 2024,
        cityId: "636eace4a935a04b1dbb4e20",
        userId: "636e67769d2ec6759994acc0"
    },
    {
        name: "Hilton Tokyo ",
        photo: [
            "https://cf.bstatic.com/xdata/images/hotel/max500/38770609.jpg?k=e648da8ea4d7acc987376a330b65676db8f78760745f142d74acb01b1de91a7e&o=&hp=1",
            "https://www.hilton.com/im/en/TYOHITW/5531182/tyohi-lobby-6.jpg?impolicy=crop&cw=5760&ch=3075&gravity=NorthWest&xposition=0&yposition=382&rw=800&rh=427",
            "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/03/b1/03/89/hilton-tokyo.jpg?w=700&h=-1&s=1"
        ],
        capacity: 1300,
        cityId: "636eace4a935a04b1dbb4e22",
        userId: "636e67769d2ec6759994acc0"
    },
    {
        name: "Hotel Paramericano",
        photo: [
            "https://static.hosteltur.com/app/public/uploads/img/articles/2020/12/15/L_143929_sheraton.jpg",
            "https://www.kayak.com.ar/rimg/himg/49/4c/ae/leonardo-2140334-brcsi-double-lakeview-guestroom-1988-hor-clsc_O-758372.jpg?width=720&height=576&crop=true",
            "https://ak-d.tripcdn.com/images/022181200090korwq790A_R_800_525.jpg"
        ],
        capacity: 800,
        cityId: "637186561a9c58ba59c508b9",
        userId: "636e67769d2ec6759994acc0"
    },
    {
        name: "Hotel NH Hotel Casino",
        photo: [
            "https://p.bookcdn.com/data/Photos/380x250/3156/315689/315689781/Nh-Hotel-Casino-photos-Exterior.JPEG",
            "https://img.nh-hotels.net/4z8a/48yYV/original/RSPV2_NH_hotel-casino_013.jpg?output-quality=80&resize=1600:*&background-color=white",
            "https://media-cdn.tripadvisor.com/media/photo-s/06/16/4e/e7/nh-gran-hotel-provincial.jpg"
        ],
        capacity: 1500,
        cityId: "636e9b1f37a6690656b36ec3",
        userId: "636e67769d2ec6759994acbf"
    },
    {
        name: "Marriott Cancun Resort ",
        photo: [
            "https://imgcy.trivago.com/c_fill,d_dummy.jpeg,e_sharpen:60,f_auto,h_627,q_auto,w_1200/itemimages/34/43/34430_v8.jpeg",
            "https://cache.marriott.com/content/dam/marriott-renditions/CUNMX/cunmx-guestroom-0132-hor-wide.jpg?output-quality=70&interpolation=progressive-bilinear&downsize=1336px:*",
            "https://storage.googleapis.com/cloudaio/images/hotel/0a64071c-20fe-44dc-955e-2d1f95a8893a/23771/casamagna-cancun-marriott-resort-1.jpg"
        ],
        capacity: 2000,
        cityId: "636e9b1f37a6690656b36ebc",
        userId: "636e67769d2ec6759994acbf"
    },
    {
        name: "Hotel Warwick Geneva",
        photo: [
            "https://ak-d.tripcdn.com/images/22040n000000ei92f4E26_Z_1100_824_R5_Q70_D.jpg",
            "https://content.r9cdn.net/himg/99/b4/00/ice-83916348-65591341_3XL-759952.jpg",
            "https://www.geneve.com/-/media/geneva/assets/importer/hotels/54043_web_1280x960.jpg"
        ],
        capacity: 800,
        cityId: "636eace4a935a04b1dbb4e26",
        userId: "636e7868b2ea2713548222b7"
    }
]

require("dotenv").config();
require("../database");
const Hotel = require("../../models/Hotel");

hotels.forEach((elemento) => {
    Hotel.create({
        name: elemento.name,
        photo: elemento.photo,
        capacity: elemento.capacity,
        cityId: elemento.cityId,
        userId: elemento.userId,
    })
});