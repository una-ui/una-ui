import { inject } from '@vercel/analytics'

export default defineNuxtPlugin(() => {
  if (process.env.NODE_ENV === 'development' || process.env.VERCEL_ENV === 'development')
    return

  inject()
})
