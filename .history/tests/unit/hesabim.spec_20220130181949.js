class User {
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
describe('User', () => {
    test('isim dönüyür mü?', () => {
        const user = new User({ ad: 'Deneme', soyad: 'Denemeoglu' })
        expect(user.name).toBe('Deneme Denemeoglu')
    })
    test('email dönüyür mü?', () => {
        const email = new User({ email: 'denemedenemeoglu@deneme.com' })
        expect(email.email).toBe('Rüzgar@hotmail.com')
    })
})