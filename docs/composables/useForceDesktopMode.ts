/**
 * Forces desktop mode in example iframes
 * This ensures that responsive components always render in desktop view
 * regardless of the iframe size
 */
export function useForceDesktopMode() {
  // Set viewport meta to a fixed desktop width
  useHead({
    meta: [
      { name: 'viewport', content: 'width=1280' },
    ],
  })

  // Force desktop mode by overriding the useSidebar composable if it exists
  if (typeof useSidebar !== 'undefined') {
    const originalUseSidebar = useSidebar
    // @ts-expect-error - Override the useSidebar composable
    useSidebar = () => {
      const original = originalUseSidebar()
      return {
        ...original,
        isMobile: ref(false), // Force desktop mode
      }
    }
  }
}
