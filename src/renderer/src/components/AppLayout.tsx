import { ComponentProps, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

//
export const RootLayout = ({ className, children, ..._props }: ComponentProps<'main'>) => {
  return (
    <>
      <main className={twMerge('flex flex-row h-screen', className)} {..._props}>
        {children}
      </main>
    </>
  )
}

//Platform's Sidebar
export const SideBar = ({ className, children, ..._props }: ComponentProps<'aside'>) => {
  return (
    <>
      <aside
        className={twMerge('w-[250px] mt-10 h-[100vh + 10px] overflow-awuto', className)}
        {..._props}
      >
        {children}
      </aside>
    </>
  )
}
//Platform's Sidebar
export const Navbar = ({ className, children, ..._props }: ComponentProps<'nav'>) => {
  return (
    <>
      <nav
        className={twMerge('w-[100vw] h-[50px] overflow-awuto border-red', className)}
        {..._props}
      >
        {children}
      </nav>
    </>
  )
}

//Content of the SideBar
export const Content = forwardRef<HTMLDivElement, ComponentProps<'div'>>(
  ({ className, children, ..._props }, ref) => (
    <div ref={ref} className={twMerge('flex-1 overflow-auto', className)} {..._props}>
      {children}
    </div>
  )
)

Content.displayName = 'Content'
