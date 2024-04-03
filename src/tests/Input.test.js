import { validatePhoneNumber } from "../utilities/functions"

describe('Input component', () => {
  describe('Validate phone number', () => {

    beforeEach( () => {
      
    })

    test('You must return the value of false', () => {
        const response = validatePhoneNumber('a')
        expect(typeof response).toBe('boolean')
    })

    test('You must return the value of true', () => {
      const response = validatePhoneNumber('947208668')
      expect(typeof response).toBe('boolean')
  })
  })
})