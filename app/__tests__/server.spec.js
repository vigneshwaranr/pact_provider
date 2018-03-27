import request from 'supertest'
import buildServer from '../server'

describe('GET /books', () => {
    let app = buildServer()

    it('respond with json', (done) => {
        request(app)
            .get('/books?ids=1,2,3')
            .set('Accept', 'application/json')
            .expect(function (res) {
                expect(res.body).to.be.an('array')
                expect(res.body).to.have.lengthOf(3)
            })
            .expect(200, done)
    })
})