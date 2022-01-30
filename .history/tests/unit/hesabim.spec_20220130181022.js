class hesap {
    constructor(details) {
        const {
            ad,
            soyad,
            email
        } = details
        this.ad = ad
        this.soyad = soyad
        this.email = email
    }

    get name() {
        return `${this.ad} ${this.soyad}`
    }

    get email() {
        return `${this.email}`
    }
}
describe('hesap', () => {
    test('isim dönüyür mü?', () => {
        const hesap = new hesap({ ad: 'Ruzgar', soyad: 'Rüzgar' })
        expect(hesap.name).toBe('Ruzgar Rüzgar')
    })
    test('email dönüyür mü?', () => {
        const email = new hesap({ email: 'Rüzgar@hotmail.com' })
        expect(email.email).toBe('Rüzgar@hotmail.com')
    })
})