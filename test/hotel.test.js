const app = require('../app');
const chai = require('chai')
const assert = chai.assert
const request = require('supertest');
const { expect } = require('chai');

describe('GET /api/hotels/', function (done) {
    it('Return an error when the filter does not find a hotel', function (done) {
        request(app)
            .get(`/hotels/3456789olgfdsdrt`)
            .expect(404)
            .end(function (err, res) {
                if (err) return done(err);
                done();
            });
    }),
        it('check that the user sends a number in the name field', function (done) {
            request(app)
                .post('/api/hotels')
                .send({
                    "name": "Four season resort ",
                    "photo": [
                        "https://i0.wp.com/thisbugslife.com/wp-content/uploads/2022/08/f0fa3c43fb8bd90c5080bb19cf9f8ba4.jpg?ssl=1",
                        "https://a.cdn-hotels.com/gdcs/production144/d1960/e7cad94e-be27-4078-a131-5b049d23a0cc.jpg",
                        "https://images.squarespace-cdn.com/content/v1/53e1e525e4b091ac3336f302/1410423105705-YT7B849V1TEQR4YM0HHB/Picture1.jpg?format=1500w"
                    ],
                    "capacity": 1200,
                    "cityId": "636e9b1f37a6690656b36ec0",
                    "userId": "636e67769d2ec6759994acc1"
                })
                .expect(res => {
                    assert.isNumber(res.body.data.capacity)
                })
                .end(function (err, res) {
                    if (err) {
                        return done(err)
                    }
                    done()
                })
        })
    it(`Hotel successfully created`, function (done) {
        request(app)
            .post(`/api/hotels/`)
            .send({
                "name": "maurito",
                "photo": [
                    "https://upload.wikimedia.org/wikipedia/commons/a/a7/Beijing_International_Convention_Center_%2820200810181819%29.jpg",
                    "https://upload.wikimedia.org/wikipedia/commons/e/e1/Chaoyang%2C_Beijing_IMG_4436_Beijing_Intl_Convention_Center.jpg",
                    "https://ak-d.tripcdn.com/images/200i16000000z6d3fE2AB_Z_1100_824_R5_Q70_D.jpg"
                ],
                "capacity": 20000,
                "cityId": "636d975fff2f61c6a45710b2",
                "userId": "636d82c86529ebe93bbef921"
            })
            .expect(201)
            .end(function (err) {
                if (err) return done(err);
                done();
            });
    })
    it('The hotel was removed', function (done) {
        token = ""
        let hotelId = "6384557ca9665972cdced228"
        request(app)
            .delete(`/api/hotels/${hotelId}`)
            .auth(token, { type: "bearer" })
            .expect(200 )
            .end(function (err, res) {
                if (err) return done(err);
                done()
            })
    })

})

