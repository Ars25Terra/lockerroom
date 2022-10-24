import { IPerson } from '../models/Models'
import { CountriesEn, Gender, positions, Sports } from '../data/selectsData'

export interface IDemoService {
  /**
   * Generate demo persons
   */
  getPersons: (personCount: number) => IPerson[]
}

/**
 * Service to generate demo data
 */
const DemoDataService = (): IDemoService => {
  const names = ['Jon Mitchell', 'Kira Plastinina']

  const randomNumberInRange = (min: number, max: number): number =>
    Math.floor(Math.random() * (max - min + 1) + min)

  return {
    getPersons: (personCount) => {
      const result: IPerson[] = []
      for (let a = 0; a < personCount; a++) {
        let name = ''
        const country =
          CountriesEn[randomNumberInRange(0, CountriesEn.length - 1)].value
        const gender = Gender[randomNumberInRange(0, Gender.length - 1)].value
        const position =
          positions[randomNumberInRange(0, positions.length - 1)].label
        const sport = Sports[randomNumberInRange(0, Sports.length - 1)].value
        const age = randomNumberInRange(16, 70)
        name = a % 2 === 0 ? names[0] : names[1]
        result.push({
          id: a,
          name,
          age,
          gender,
          country,
          position,
          isConnected: false,
          sport
        })
      }
      return result
    }
  }
}

export default DemoDataService
