const greeting = (guest) => `Hello, ${guest}!`

describe('Sample Test Cases', () => {
    it('should say Hello', () => {
        expect(greeting('Jest')).toBe('Hello, Jest!')
    })
})