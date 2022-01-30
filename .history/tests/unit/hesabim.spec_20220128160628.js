class User {
    constructor(details) {
        const {
            eposta
        } = details
        this.eposta = eposta
    }

 
    mounted() {
        return `${this.user}`
    }
}
describe('User', () => {
  
    test('email dönüyür mü?', () => {
        const user = new User({ eposta: 'Rüzgar@hotmail.com' })
        expect(user.email).toBe('Rüzgar@hotmail.com')
    })
})