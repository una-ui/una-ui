import { faker } from '@faker-js/faker'

export interface Person {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
  avatar?: string
  progress: number
  status: 'triaged' | 'in-progress' | 'completed' | 'cancelled'
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
    username: faker.internet.username().toLowerCase(),
    email: faker.internet.email().toLowerCase(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    avatar: faker.image.avatarGitHub(),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Person['status']>([
      'triaged',
      'in-progress',
      'completed',
      'cancelled',
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
