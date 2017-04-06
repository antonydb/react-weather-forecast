import { API_KEY } from './config'

it('should have an API key present', () => {
  expect(API_KEY.length).toBeGreaterThan(0)
})
