import DefaultTheme from 'vitepress/theme'
import './base.css'
import './main-home.css'
import './bioland.css'
import './biosafety.css'
import Layout from './Layout.vue'

export default {
  extends: DefaultTheme,
  Layout,
  enhanceApp({ router }) {
    if (typeof window === 'undefined') return

    // Force dark mode
    document.documentElement.classList.add('dark')

    const applyRouteClass = (to: string) => {
      const html = document.documentElement
      html.classList.remove('bioland-home', 'bioland-section', 'biosafety-home', 'biosafety-section', 'main-home')

      // Normalize path - remove base path, language prefix, and trailing elements
      // Handle /bioland-docs/ base path and language prefixes like /fr/, /es/, etc.
      let path = to
        .replace(/^\/bioland-docs/, '') // Remove base path
        .replace(/\.html$/, '') // Remove .html extension
        .replace(/\/$/, '') // Remove trailing slash

      console.log('🎨 Applying styles for path:', to, '→', path)

      if (path === '' || path === '/index') {
        html.classList.add('main-home')
        console.log('✓ Applied: main-home')
      } else if (path === '/bioland' || path === '/bioland/index') {
        html.classList.add('bioland-home')
        console.log('✓ Applied: bioland-home')
      } else if (path.startsWith('/bioland/')) {
        html.classList.add('bioland-section')
        console.log('✓ Applied: bioland-section')
      } else if (path === '/biosafety-land' || path === '/biosafety-land/index') {
        html.classList.add('biosafety-home')
        console.log('✓ Applied: biosafety-home')
      } else if (path.startsWith('/biosafety-land/')) {
        html.classList.add('biosafety-section')
        console.log('✓ Applied: biosafety-section')
      }
    }

    applyRouteClass(router.route.path)
    router.onAfterRouteChanged = (to) => applyRouteClass(to)
  }
}
