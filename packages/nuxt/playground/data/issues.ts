import { faker } from '@faker-js/faker'

export interface Issue {
  id: string
  // Contributor properties
  username: string
  email: string
  firstName: string
  lastName: string
  progress: number
  status: string
  avatar: string

  // Issue properties
  title?: string
  number?: number
  state?: 'open' | 'closed'
  labels?: string[]
  assignee?: {
    username: string
    avatar: string
    email?: string
  }
  author?: {
    username: string
    avatar: string
    email?: string
  }
  comments?: number
  createdAt?: string
  updatedAt?: string
  repository?: string
  priority?: 'low' | 'medium' | 'high' | 'critical'

  subRows?: Issue[]
}

function range(len: number) {
  const arr: number[] = []
  for (let i = 0; i < len; i++)
    arr.push(i)

  return arr
}

function newIssue(): Issue {
  const status = faker.helpers.arrayElement(['triaged', 'in-progress', 'completed', 'cancelled'])
  const hasAssignee = faker.datatype.boolean(0.7)
  const username = faker.internet.displayName().toLowerCase()
  const avatar = faker.image.avatar()
  const email = faker.internet.email()
  const firstName = faker.person.firstName()
  const lastName = faker.person.lastName()

  return {
    id: faker.database.mongodbObjectId(),
    username,
    email,
    firstName,
    lastName,
    progress: faker.number.int({ min: 0, max: 100 }),
    status,
    avatar,

    // Also include issue properties
    title: faker.helpers.arrayElement([
      'Fix rendering issue in component',
      'Update documentation for API endpoints',
      'Add dark mode support',
      'Implement pagination for table view',
    ]),
    number: faker.number.int({ min: 100, max: 9999 }),
    state: faker.helpers.arrayElement(['open', 'closed']),
    assignee: hasAssignee
      ? {
          username: faker.internet.displayName().toLowerCase(),
          avatar: faker.image.avatar(),
          email: faker.internet.email(),
        }
      : undefined,
    author: {
      username,
      avatar,
      email,
    },
    comments: faker.number.int({ min: 0, max: 25 }),
    repository: faker.helpers.arrayElement(['frontend/ui', 'backend/api', 'docs']),
    priority: faker.helpers.arrayElement(['low', 'medium', 'high', 'critical']),
  }
}

export function makeIssue(...lens: number[]) {
  const makeIssueLevel = (depth = 0): Issue[] => {
    const len = lens[depth]!
    return range(len).map((): Issue => {
      return {
        ...newIssue(),
        subRows: lens[depth + 1] ? makeIssueLevel(depth + 1) : undefined,
      }
    })
  }

  return makeIssueLevel()
}

export default makeIssue
