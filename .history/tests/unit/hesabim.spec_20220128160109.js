test('isim dönüyür mü?', () => {
    const user = new User({ firstname: 'Ruzgar', lastname: 'Rüzgar' })
    expect(user.name).toBe('Ruzgar Rüzgar')
})
test('email dönüyür mü?', () => {
    const eposta = new User({ eposta: 'Rüzgar@hotmail.com' })
    expect(eposta.email).toBe('Rüzgar@hotmail.com')
})