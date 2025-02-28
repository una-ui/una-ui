import { faker } from '@faker-js/faker'

export interface Contributor {
  id: string
  username: string
  email: string
  firstName?: string
  lastName?: string
  avatar?: string
  progress: number
  status: 'triaged' | 'in-progress' | 'completed' | 'cancelled'
  subRows?: Contributor[]
}

function range(len: number) {
  const arr: number[] = []
  for (let i = 0; i < len; i++)
    arr.push(i)

  return arr
}

function newContributor(): Contributor {
  return {
    id: faker.database.mongodbObjectId(),
    username: faker.internet.username().toLowerCase(),
    email: faker.internet.email().toLowerCase(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    avatar: faker.image.avatarGitHub(),
    progress: faker.number.int(100),
    status: faker.helpers.shuffle<Contributor['status']>([
      'triaged',
      'in-progress',
      'completed',
      'cancelled',
    ])[0]!,
  }
}

export function makeContributor(...lens: number[]) {
  const makeContributorLevel = (depth = 0): Contributor[] => {
    const len = lens[depth]!
    return range(len).map((): Contributor => {
      return {
        ...newContributor(),
        subRows: lens[depth + 1] ? makeContributorLevel(depth + 1) : undefined,
      }
    })
  }

  return makeContributorLevel()
}

export default makeContributor
