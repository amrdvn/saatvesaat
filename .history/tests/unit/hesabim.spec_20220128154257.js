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

    get auth() {
        return `${this.ad} ${this.soyad}` `${this.email}`
    }
}
describe('User', () => {
    test('Kullanıcı ad soyad geliyor mu?', () => {
        const user = new User({ ad: 'Deneme', soyad: 'Deneme', email })
        expect(user.name).toBe('Deneme Deneme')
    })
    test('Email bilgisi geliyor mu?', () => {
        const email = new User({ email: 'deneme@deneme.com' })
        expect(email.email).toBe('deneme@deneme.com')
    })
})