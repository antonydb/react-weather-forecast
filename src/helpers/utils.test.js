import { normaliseAPIData } from './utils'
import sample from '../data/sample'

it('should correctly normalise api data into an array of flat objects', () => {
  const expected = [{
    id: 1491048000,
    day: 'Sun',
    date: '1 Apr',
    min: 9,
    max: 13,
    description: 'Rain',
    icon: '10d'
  }, {
    id: 1491134400,
    day: 'Mon',
    date: '2 Apr',
    min: 8,
    max: 15,
    description: 'Clear',
    icon: '02d'
  }]

  expect(normaliseAPIData(sample.list)).toEqual(expected)
})
