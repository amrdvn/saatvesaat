class User {
    constructor(details) {
        const {
            ad,
            lastname,
            email
        } = details
        this.ad = ad
        this.lastname = lastname
        this.email = email
    }

    get name() {
        return `${this.ad} ${this.lastname}`
    }

    get email() {
        return `${this.email}`
    }
}
describe('User', () => {
    test('Kullanıcı ad soyad geliyor mu?', () => {
        const user = new User({ ad: 'Deneme', lastname: 'Deneme' })
        expect(user.name).toBe('Deneme Deneme')
    })
    test('Email bilgisi geliyor mu?', () => {
        const email = new User({ email: 'deneme@deneme.com' })
        expect(email.email).toBe('deneme@deneme.com')
    })
})