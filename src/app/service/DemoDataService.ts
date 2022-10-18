import {IPerson} from "../models/Models";
import {CountriesEn, Gender, positions, Sports} from "../data/selectsData";

export interface IDemoService {
    getPersons: (personCount: number) => IPerson[]
}

const DemoDataService = (): IDemoService => {
    const names = ['Jon Mitchell', 'Kira Plastinina']

    const randomNumberInRange = (min: number, max: number) => Math.floor(Math.random() * (max - min + 1) + min)

    return {
        getPersons: (personCount) => {
            const result: IPerson[] = []
            for (let a=0; a < personCount; a++) {
                let name = ''
                const country = CountriesEn[randomNumberInRange(0, CountriesEn.length - 1)].value
                let gender = Gender[randomNumberInRange(0, Gender.length - 1)].value
                let position = positions[randomNumberInRange(0, positions.length - 1)].label
                let sport = Sports[randomNumberInRange(0, Sports.length - 1)].value
                const age = randomNumberInRange(16, 70)
                name = a % 2 === 0
                    ? names[0]
                    : names[1]
                result.push({
                    name: name,
                    age: age,
                    gender: gender,
                    country: country,
                    position: position,
                    isConnected: false,
                    sport: sport
                })
            }
            return result
        }
    }
}

export default DemoDataService