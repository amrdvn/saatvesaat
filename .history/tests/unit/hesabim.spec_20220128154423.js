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
    test('Kullanıcı ad soyad email geliyor mu?', () => {
        const user = new User({ ad: 'Deneme', soyad: 'Deneme', email: 'deneme@deneme.com' })
        expect(user.name).toBe('Deneme Deneme deneme@deneme.com')
    })

})