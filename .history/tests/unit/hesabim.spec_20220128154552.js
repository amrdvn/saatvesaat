class User {
    constructor(details) {
        const {
            ad,
            soyad,
            
        } = details
        this.ad = ad
        this.soyad = soyad
    }

    get auth() {
        return `${this.ad} ${this.soyad}`
    }
}
describe('User', () => {
    test('Kullanıcı ad soyad geliyor mu?', () => {
        const user = new User({ ad: 'Deneme', soyad: 'Deneme' })
        expect(user.name).toBe('Deneme Deneme')
    })
})