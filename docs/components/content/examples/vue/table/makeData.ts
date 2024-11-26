import { faker } from '@faker-js/faker'

export interface Person {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
  avatar?: string
  age: number
  visits: number
  progress: number
  status: 'relationship' | 'complicated' | 'single'
  subRows?: Person[]
}

function range(len: number) {
  const arr: number[] = []
  for (let i = 0; i < len; i++)
    arr.push(i)

  return arr
}

function newPerson(): Person {
  return {
    id: faker.database.mongodbObjectId(),
    username: faker.internet.username(),
    email: faker.internet.email(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    avatar: faker.image.avatarGitHub(),
    age: faker.number.int(40),
    visits: faker.number.int(1000),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person['status']>([
      'relationship',
      'complicated',
      'single',
    ])[0]!,
  }
}

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Person[] => {
    const len = lens[depth]!
    return range(len).map((): Person => {
      return {
        ...newPerson(),
        subRows: lens[depth + 1] ? makeDataLevel(depth + 1) : undefined,
      }
    })
  }

  return makeDataLevel()
}

export default makeData
