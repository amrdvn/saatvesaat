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
        return `${this.firstname} ${this.lastname}`
    }

    get email() {
        return `${this.eposta}`
    }
}
describe('User', () => {
    test('Kullanıcı adı ve soyadı geliyor mu?', () => {
        const user = new User({ firstname: 'Deneme', lastname: 'Denemeoglu' })
        expect(user.name).toBe('Deneme Denemeoglu')
    })
    test('Kullanıcı email bilgisi geliyor mu??', () => {
        const email = new User({ email: 'denemedenemeoglu@deneme.com' })
        expect(email.email).toBe('denemedenemeoglu@deneme.com')
    })
})