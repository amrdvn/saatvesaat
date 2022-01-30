class User {
    constructor(details) {
        const {
            firstname,
            lastname,
            eposta
        } = details
        this.firstname = firstname
        this.lastname = lastname
        this.eposta = eposta
    }

    get name() {
        return `${this.ad} ${this.soyad}`
    }

    get email() {
        return `${this.email}`
    }
}
describe('User', () => {
    test('Kullanıcı adı geliyor mu?', () => {
        const user = new User({ ad: 'Deneme', soyad: 'Deneme' })
        expect(user.name).toBe('Deneme Deneme')
    })
    test('email dönüyür mü?', () => {
        const email = new User({ email: 'deneme@deneme.com' })
        expect(email.email).toBe('deneme@deneme.com')
    })
})