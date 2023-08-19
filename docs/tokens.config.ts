import { defineTheme } from 'pinceau'

export default defineTheme({
  color: {
    black: 'rgba(var(--una-gray-950))',
    primary: {
      50: 'rgba(var(--una-primary-50))',
      100: 'rgba(var(--una-primary-100))',
      200: 'rgba(var(--una-primary-200))',
      300: 'rgba(var(--una-primary-300))',
      400: 'rgba(var(--una-primary-400))',
      500: 'rgba(var(--una-primary-500))',
      600: 'rgba(var(--una-primary-600))',
      700: 'rgba(var(--una-primary-700))',
      800: 'rgba(var(--una-primary-800))',
      900: 'rgba(var(--una-primary-900))',
      950: 'rgba(var(--una-primary-950))',
    },
    gray: {
      50: 'rgba(var(--una-gray-50))',
      100: 'rgba(var(--una-gray-100))',
      200: 'rgba(var(--una-gray-200))',
      300: 'rgba(var(--una-gray-300))',
      400: 'rgba(var(--una-gray-400))',
      500: 'rgba(var(--una-gray-500))',
      600: 'rgba(var(--una-gray-600))',
      700: 'rgba(var(--una-gray-700))',
      800: 'rgba(var(--una-gray-800))',
      900: 'rgba(var(--una-gray-900))',
      950: 'rgba(var(--una-gray-950))',
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
      height: '64px',
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
      gradientColorStop3: 'var(--una-c-brand-next)',
    },
  },
})
