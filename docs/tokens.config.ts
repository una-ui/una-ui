import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    black: 'rgba(var(--nv-gray-950))',
    primary: {
      50: 'rgba(var(--nv-primary-50))',
      100: 'rgba(var(--nv-primary-100))',
      200: 'rgba(var(--nv-primary-200))',
      300: 'rgba(var(--nv-primary-300))',
      400: 'rgba(var(--nv-primary-400))',
      500: 'rgba(var(--nv-primary-500))',
      600: 'rgba(var(--nv-primary-600))',
      700: 'rgba(var(--nv-primary-700))',
      800: 'rgba(var(--nv-primary-800))',
      900: 'rgba(var(--nv-primary-900))',
      950: 'rgba(var(--nv-primary-950))',
    },
    gray: {
      50: 'rgba(var(--nv-gray-50))',
      100: 'rgba(var(--nv-gray-100))',
      200: 'rgba(var(--nv-gray-200))',
      300: 'rgba(var(--nv-gray-300))',
      400: 'rgba(var(--nv-gray-400))',
      500: 'rgba(var(--nv-gray-500))',
      600: 'rgba(var(--nv-gray-600))',
      700: 'rgba(var(--nv-gray-700))',
      800: 'rgba(var(--nv-gray-800))',
      900: 'rgba(var(--nv-gray-900))',
      950: 'rgba(var(--nv-gray-950))',
    },
  },
  docus: {
    body: {
      backgroundColor: {
        initial: '{color.white}',
        dark: '{color.black}',
      },
      color: {
        initial: '{color.gray.800}',
        dark: '{color.gray.200}',
      },
      fontFamily: '{font.sans}',
    },
    header: {
      // height: '54px',
      logo: {
        height: {
          initial: '{space.6}',
          sm: '{space.7}',
        },
      },
      title: {
        fontSize: '{fontSize.2xl}',
        fontWeight: '{fontWeight.bold}',
        color: {
          static: {
            initial: '{color.gray.900}',
            dark: '{color.gray.100}',
          },
          hover: '{color.primary.500}',
        },
      },
    },
    footer: { height: { initial: '145px', sm: '100px' }, padding: '{space.4} 0' },
    readableLine: '78ch',
    loadingBar: {
      height: '3px',
      gradientColorStop1: '{color.primary.600}',
      gradientColorStop2: '{color.primary.500}',
      gradientColorStop3: '{color.primary.400}',
    },
  },
})
