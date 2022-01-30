class User {
    constructor(details) {
        const {
            ad,
            soyad,
            eposta
        } = details
        this.ad = ad
        this.soyad = soyad
        this.eposta = eposta
    }

    get name() {
        return `${this.ad} ${this.soyad}`
    }

    get email() {
        return `${this.eposta}`
    }
}
describe('User', () => {
    test('isim dönüyür mü?', () => {
        const user = new User({ ad: 'Ruzgar', soyad: 'Rüzgar' })
        expect(user.name).toBe('Ruzgar Rüzgar')
    })
    test('email dönüyür mü?', () => {
        const eposta = new User({ eposta: 'Rüzgar@hotmail.com' })
        expect(eposta.email).toBe('Rüzgar@hotmail.com')
    })
})