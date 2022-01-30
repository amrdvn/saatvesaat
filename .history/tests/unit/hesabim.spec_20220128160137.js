class User {
    constructor(details) {
        const {
            eposta
        } = details
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
    test('isim dönüyür mü?', () => {
        const user = new User({ firstname: 'Ruzgar', lastname: 'Rüzgar' })
        expect(user.name).toBe('Ruzgar Rüzgar')
    })
})