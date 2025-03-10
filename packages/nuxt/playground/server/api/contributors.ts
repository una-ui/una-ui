import { makeContributor } from '~/data'

export default defineEventHandler(async (e) => {
  const { limit } = getQuery(e)

  return makeContributor(Number(limit))
})
