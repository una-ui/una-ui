import { createError, getRouterParams } from 'h3'
import { defineCachedEventHandler } from 'nitropack/runtime'
import { getColors } from '../utils/colors'

export default defineCachedEventHandler(async (event) => {
  let { prefix, color } = getRouterParams(event)
  // allow .json suffix for better file URL support
  if (color.endsWith('.json')) {
    color = color.replace(/\.json$/, '')
  }
  let colors
  try {
    colors = getColors(color, prefix)
  }
  catch (error) {
    throw createError({
      statusCode: 404,
      statusMessage: (error as Error).message,
    })
  }
  return colors
}, {
  // maxAge: 60 * 60 * 24, // 24 hours
})
