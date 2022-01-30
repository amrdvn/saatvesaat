class User {
    constructor(details) {
        const {
            eposta
        } = details
        this.eposta = eposta
    }

    auth() {
        return `${this.eposta}`
    }
}
describe('User', () => {
    test('isim dönüyür mü?', () => {
        const user = new User({ email: 'deneme@deneme.com'})
        expect(eposta.email).toBe('deneme@deneme.com')
    })
})