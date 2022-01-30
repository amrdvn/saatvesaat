class User {
    constructor(details) {
        const {
            eposta
        } = details
        this.eposta = eposta
    }

    get email() {
        return `${this.eposta}`
    }
}
describe('User', () => {
    test('isim dönüyür mü?', () => {
        const user = new User({ email: 'deneme@deneme.com'})
        expect(user.email).toBe('deneme@deneme.com')
    })
})