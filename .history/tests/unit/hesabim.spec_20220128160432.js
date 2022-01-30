class User {
    constructor(details) {
        const {
            eposta
        } = details
        this.eposta = eposta
    }

 
    firebase.auth() {
        return `${this.eposta}`
    }
}
describe('User', () => {
  
    test('email dönüyür mü?', () => {
        const eposta = new User({ eposta: 'Rüzgar@hotmail.com' })
        expect(eposta.email).toBe('Rüzgar@hotmail.com')
    })
})