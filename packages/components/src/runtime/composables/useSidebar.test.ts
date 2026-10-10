import { defu } from 'defu'
import { describe, expect, it } from 'vitest'
import { SIDEBAR_DEFAULTS } from './useSidebar'

describe('sidebar defaults', () => {
  it('has correct default values', () => {
    expect(SIDEBAR_DEFAULTS).toStrictEqual({
      cookieName: 'sidebar:state',
      cookieMaxAge: 60 * 60 * 24 * 7,
      width: '16rem',
      widthMobile: '18rem',
      widthIcon: '3rem',
      keyboardShortcut: 'b',
    })
  })

  it('cookieMaxAge equals 7 days in seconds', () => {
    expect(SIDEBAR_DEFAULTS.cookieMaxAge).toBe(604800)
  })
})

describe('sidebar config merge via defu', () => {
  it('uses all defaults when no overrides provided', () => {
    const result = defu({}, SIDEBAR_DEFAULTS)
    expect(result).toStrictEqual(SIDEBAR_DEFAULTS)
  })

  it('partial override keeps remaining defaults', () => {
    const result = defu({ keyboardShortcut: '.' }, SIDEBAR_DEFAULTS)

    expect(result.keyboardShortcut).toBe('.')
    expect(result.cookieName).toBe('sidebar:state')
    expect(result.cookieMaxAge).toBe(604800)
    expect(result.width).toBe('16rem')
    expect(result.widthMobile).toBe('18rem')
    expect(result.widthIcon).toBe('3rem')
  })

  it('overrides multiple properties at once', () => {
    const result = defu(
      { width: '20rem', widthMobile: '22rem', keyboardShortcut: '.' },
      SIDEBAR_DEFAULTS,
    )

    expect(result.width).toBe('20rem')
    expect(result.widthMobile).toBe('22rem')
    expect(result.keyboardShortcut).toBe('.')
    expect(result.cookieName).toBe('sidebar:state')
    expect(result.widthIcon).toBe('3rem')
  })

  it('overrides all properties', () => {
    const custom = {
      cookieName: 'my-sidebar',
      cookieMaxAge: 60 * 60 * 24 * 30,
      width: '20rem',
      widthMobile: '22rem',
      widthIcon: '4rem',
      keyboardShortcut: '.',
    }

    const result = defu(custom, SIDEBAR_DEFAULTS)
    expect(result).toStrictEqual(custom)
  })

  it('nested defu merge preserves sidebar defaults in full app config', () => {
    const defaults = {
      primary: 'yellow',
      gray: 'stone',
      radius: 0.5,
      fontSize: 16,
      sidebar: SIDEBAR_DEFAULTS,
    }

    const userConfig = {
      primary: 'blue',
      sidebar: { keyboardShortcut: '.' },
    }

    const result = defu(userConfig, defaults)

    expect(result.primary).toBe('blue')
    expect(result.gray).toBe('stone')
    expect(result.sidebar.keyboardShortcut).toBe('.')
    expect(result.sidebar.width).toBe('16rem')
    expect(result.sidebar.cookieName).toBe('sidebar:state')
  })
})
