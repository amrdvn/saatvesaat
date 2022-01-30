describe('Beklenilen', () => {
    test('Mat testi', () => {
      // Use .toBe for simple comparisons
      expect('A').toBe('A')
      expect(5).toBe(5)
      expect(4 + 3).toBe(7)
  
      // Use .toEqual when comparing complex types
      expect({ type: 'array' }).toEqual({ type: 'array' })
      expect([5]).toEqual([5])
      expect([...[1, 2, 3]]).toEqual([1, 2, 3])
  
      // Use property Matchers if the final value is unknown
      const sonuc = {
        value: Date.now() // A random Number
      }
  
      expect(sonuc).toEqual({
        value: expect.any(Number)
      })
    })
  })