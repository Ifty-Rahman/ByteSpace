import { createRouter } from '@tanstack/react-router'
import { routeTree } from './routeTree.gen'

export const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  scrollRestoration: true,
})

// Makes route paths, params and search params type-safe across the app.
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}
