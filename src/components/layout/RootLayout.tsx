import { HeadContent, Outlet } from '@tanstack/react-router'

/** App shell shared by every route. */
export default function RootLayout() {
  return (
    <>
      <HeadContent />
      <Outlet />
    </>
  )
}
