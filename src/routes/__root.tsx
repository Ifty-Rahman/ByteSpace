import { createRootRoute } from '@tanstack/react-router'
import RootLayout from '@/components/layout/RootLayout'

export const Route = createRootRoute({
  head: () => ({
    meta: [{ title: 'ByteSpace' }],
  }),
  component: RootLayout,
})
