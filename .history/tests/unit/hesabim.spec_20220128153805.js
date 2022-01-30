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
    test('isim dönüyür mü?', () => {
        const user = new User({ firstname: 'Ruzgar', lastname: 'Rüzgar' })
        expect(user.name).toBe('Ruzgar Rüzgar')
    })
    test('email dönüyür mü?', () => {
        const eposta = new User({ eposta: 'Rüzgar@hotmail.com' })
        expect(eposta.email).toBe('Rüzgar@hotmail.com')
    })
})