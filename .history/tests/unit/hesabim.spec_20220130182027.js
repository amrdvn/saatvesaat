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
    test('Kullanıcı adı ve soyadı geliyor mu?', () => {
        const user = new User({ ad: 'Deneme', soyad: 'Denemeoglu' })
        expect(user.name).toBe('Deneme Denemeoglu')
    })
    test('Kullanıcı email bilgisi?', () => {
        const email = new User({ email: 'denemedenemeoglu@deneme.com' })
        expect(email.email).toBe('denemedenemeoglu@deneme.com')
    })
})