class User {
    constructor(details) {
        const {
            ad,
            lastname,
            eposta
        } = details
        this.ad = ad
        this.lastname = lastname
        this.eposta = eposta
    }

    get name() {
        return `${this.ad} ${this.lastname}`
    }

    get email() {
        return `${this.eposta}`
    }
}
describe('User', () => {
    test('isim dönüyür mü?', () => {
        const user = new User({ ad: 'Ruzgar', lastname: 'Rüzgar' })
        expect(user.name).toBe('Ruzgar Rüzgar')
    })
    test('email dönüyür mü?', () => {
        const eposta = new User({ eposta: 'Rüzgar@hotmail.com' })
        expect(eposta.email).toBe('Rüzgar@hotmail.com')
    })
})