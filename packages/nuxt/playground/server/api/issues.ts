import { makeIssue } from '~/data'

export default defineEventHandler(async (e) => {
  const { limit } = getQuery(e)

  return makeIssue(Number(limit))
})
