import { Verifier } from '@pact-foundation/pact'
import buildServer from '../app/server'

const SERVER_PORT = 3001

describe('Pact Verification', () => {
    before((done) => {
        let app = buildServer()
        app.listen(SERVER_PORT, () => { done() })
    })

    it('should verify contract for Book API', function (done) {
        this.timeout(30000)
        
        let opts = {
            provider: 'BookAPI',
            providerBaseUrl: `http://localhost:${SERVER_PORT}`,
            pactBrokerUrl: process.env.PACT_BROKER_URL
        }

        new Verifier().verifyProvider(opts).then(() => { done() }).catch((err) => {
            console.error(err)
        })
    })
})