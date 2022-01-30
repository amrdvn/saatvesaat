class User {
    constructor(details) {
        const {
            firstname,
            lastname,
            email
        } = details
        this.firstname = firstname
        this.lastname = lastname
        this.email = email
    }

    get name() {
        return `${this.firstname} ${this.lastname}`
    }

    get email() {
        return `${this.email}`
    }
}
describe('User', () => {
    test('Kullanıcı ad soyad geliyor mu?', () => {
        const user = new User({ firstname: 'Deneme', lastname: 'Deneme' })
        expect(user.name).toBe('Deneme Deneme')
    })
    test('Email bilgisi dönüyür mü?', () => {
        const email = new User({ email: 'deneme@deneme.com' })
        expect(email.email).toBe('deneme@deneme.com')
    })
})