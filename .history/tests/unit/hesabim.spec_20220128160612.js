class User {
    constructor(details) {
        const {
            eposta
        } = details
        this.eposta = eposta
    }

 
    mounted() {
        return `${this.eposta}`
    }
}
describe('User', () => {
  
    test('email dönüyür mü?', () => {
        const user = new User({ eposta: 'Rüzgar@hotmail.com' })
        expect(au.email).toBe('Rüzgar@hotmail.com')
    })
})