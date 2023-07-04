import { FC } from "react"

interface LayoutProps {
    children: React.ReactNode
}

const Layout:FC<LayoutProps> = ({children}) => {
  return (
    <div className="layout">
        <div className="layout-wrapper">
            {children}
        </div>
    </div>
  )
}

export default Layout